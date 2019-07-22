#!/usr/local/bin/bash
  #
  # First Run Script to configure the IDP Simulator
  #

  # Check for the right user
  if [ "$USER" '!=' "testmgr" ] ; then
     echo "This script must be run as testmgr"
     exit
  fi

  # Configure Timezone
  sudo /usr/sbin/timeconfig

  # Configure Networking
  sudo /sbin/service network stop
  sudo sed -i -e "s^ONBOOT=no^ONBOOT=yes^g" \
     /etc/sysconfig/network-scripts/ifcfg-eth0
  sudo /usr/sbin/system-config-network
  sudo /sbin/service network start

  # Set environment and defaults
  export JAVA_HOME=/usr/java/default
  export JAVA_OPTS="-Dhttps.protocols=TLSv1 -Djavax.net.ssl.trustStore=${HOME}/SSL/jssecacerts -Djavax.net.ssl.trustStorePassword=changeit"
  export PATH=$JAVA_HOME/bin:$JAVA_HOME/j2re/bin:$PATH

  FQDN=`hostname`
  IPADDR=`/sbin/ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}'`

  echo "Welcome to the IDP Simulator Configuration"
  echo
  
  HOSTNAME=`echo ${FQDN} | cut -f 1 -d '.'`
  DOMAINNAME=`expr ${FQDN} : "${HOSTNAME}\(\..*\)"`

  echo "Please choose a common domain name, or press enter to accept"
  echo "the following default:"
  read -p " => " -e -i "fjgc-gccf.gc.ca" COMMONDOMAIN

  echo "You can edit the top level host name for the common domain, or press enter"
  echo "to accept the default of ${HOSTNAME}.${COMMONDOMAIN}:"
  read -p " => " -e -i "${HOSTNAME}" CDHOSTNAME
  
  #See if hostname is registered in DNS
  if [ ! "`/usr/bin/nslookup ${FQDN} | grep "Name" | cut -f 2`" '=' "${FQDN}" ] ;then
     echo "Could not find ${FQDN} registered in DNS"
     echo "Checking/etc/hosts"
     grep "${HOSTNAME}" /etc/hosts
     if [ $? -eq 0 ] ; then
        echo "Found"
     else
        echo "Not found. Adding an entry to /etc/hosts"
        sudo /bin/sh -c "echo -e \"${IPADDR}\t${FQDN} ${CDHOSTNAME}.${COMMONDOMAIN}\n\" >> /etc/hosts"
        echo "Warning: you will need to edit /etc/hosts manually if you"
        echo "ever change the IP address."
     fi
  fi
    
  echo "Please choose an entity ID, or press enter to accept the following default"
  read -p " => " -e -i "https://"$FQDN"/idp" ENTITY_ID
  
  shopt -s nocasematch
  echo "Do you want to use SHA1 or SHA256 for digital signatures?"
  while true
  do
     read -p " => " -e -i "SHA256" SIGALG
     if [[ "${SIGALG}" = "SHA256" || "${SIGALG}" = "SHA1" ]] ; then
        break
     fi
     echo "You must specify either SHA1 or SHA256"
  done
  
  echo "Do you want to disable TLS and configure for regular HTTP instead of HTTPS?"
  while true
  do
     read -p " => " -e -i "NO" SSL
     if [[ "${SSL}" = "NO" ]] ; then
        PROTOCOL="https"
        PORT="443"
        cp ${HOME}/templates/tomcat/server-tls.xml ${HOME}/tomcat/conf/server.xml
        break
     fi
     if [[ "${SSL}" = "YES" ]] ; then
        PROTOCOL="http"
        PORT="80"
        cp ${HOME}/templates/tomcat/server-notls.xml ${HOME}/tomcat/conf/server.xml
        break
     fi
     echo "You must specify either YES or NO"
  done
  shopt -u nocasematch

  echo "Creating local trusted SSL keystore..."
  rm -rf ${HOME}/SSL
  mkdir ${HOME}/SSL
  cp ${JAVA_HOME}/jre/lib/security/cacerts  ${HOME}/SSL/jssecacerts
  
  # Keep files private
  umask 077

  if [ "${PROTOCOL}" = "https" ] ; then
     echo "Creating a self-signed SSL certificate..."

     # Generate 2048-bit RSA private key
     openssl genrsa -out ${HOME}/SSL/private.key 2048

     # Generate certificate request
     openssl req -new -key ${HOME}/SSL/private.key -out ${HOME}/SSL/tomcat.csr -subj "/CN=${FQDN}"

     # Create self-signed certificate including extensions for the GCCF common domain
     echo "subjectAltName=DNS:${FQDN},DNS:${CDHOSTNAME}.${COMMONDOMAIN}" > /tmp/extensions.cnf
     openssl x509 -req -days 365 -sha256 -in ${HOME}/SSL/tomcat.csr -signkey ${HOME}/SSL/private.key \
        	-extfile /tmp/extensions.cnf -out ${HOME}/SSL/tomcat.crt
     rm -f /tmp/extensions.cnf

     # Package into a PKCS#12 file
     openssl pkcs12 -export -in ${HOME}/SSL/tomcat.crt -inkey ${HOME}/SSL/private.key \
	 -out ${HOME}/SSL/tomcat.p12 -name tomcat -passout pass:secret

     # Add as a trusted certificate
     echo "Adding to local trusted SSL keystore..."
     cp ${JAVA_HOME}/jre/lib/security/cacerts  ${HOME}/SSL/jssecacerts
     ${JAVA_HOME}/bin/keytool -delete -alias ${FQDN} \
                           -keystore ${HOME}/SSL/jssecacerts -storepass changeit -noprompt 2>&1 >/dev/null
     ${JAVA_HOME}/bin/keytool -importcert -alias "${FQDN}" -file ${HOME}/SSL/tomcat.crt \
                           -keystore ${HOME}/SSL/jssecacerts -storepass changeit -noprompt
  fi
   
   
  # Configure OpenAM

  if [ -e ${HOME}/tomcat/webapps/opensso ] ; then
     echo "Removing old OpenAM configuration..."
     sudo /sbin/service tomcat stop
     rm -rf ${HOME}/opensso
     rm -rf ${HOME}/.openssocfg
     rm -rf ${HOME}/tomcat/work/*
     rm -rf ${HOME}/tomcat/logs/*
     rm -rf ${HOME}/tomcat/temp/*
     rm -rf ${HOME}/tomcat/webapps/opensso
     rm -rf ${HOME}/tomcat/webapps/idpdiscovery
     rm -rf ${HOME}/tomcat/webapps/LCS
  fi
  
  echo "Starting Tomcat..."
  sudo /sbin/chkconfig --levels 3 tomcat on
  sudo /sbin/service tomcat start

  echo "Installing custom GC login page..."
  unzip -q -o -d ${HOME}/tomcat/webapps/opensso ${HOME}/templates/ui.zip  

  echo "Performing base OpenAM Server Configuration..."

  sed -e "s^xxCOMMON_DOMAINxx^${COMMONDOMAIN}^g" \
     ${HOME}/templates/libIDPDiscoveryConfig.template > ${HOME}/libIDPDiscoveryConfig.properties

  echo -e "\
     SERVER_URL=${PROTOCOL}://${FQDN}:${PORT}\n\
     DEPLOYMENT_URI=/opensso\n\
     BASE_DIR=${HOME}/opensso\n\
     locale=en_US\n\
     PLATFORM_LOCALE=en_US\n\
     AM_ENC_KEY=SAMLTest1\n\
     ADMIN_PWD=SAMLTest1\n\
     AMLDAPUSERPASSWD=SAMLTest2\n\
     COOKIE_DOMAIN=${FQDN}\n\
     DATA_STORE=embedded\n\
     DIRECTORY_SSL=SIMPLE\n\
     DIRECTORY_SERVER=${FQDN}\n\
     DIRECTORY_PORT=50389\n\
     DIRECTORY_ADMIN_PORT=4444\n\
     DIRECTORY_JMX_PORT=1689\n\
     ROOT_SUFFIX=dc=opensso,dc=java,dc=net\n\
     DS_DIRMGRDN=cn=Directory Manager\n\
     DS_DIRMGRPASSWD=SAMLTest1\n\
  " > /tmp/amconfig.txt

  $JAVA_HOME/bin/java ${JAVA_OPTS} -jar ${HOME}/tools/configurator.jar -f /tmp/amconfig.txt

  echo "Installing OpenAM Keystore..."
  cp ${HOME}/ICM/keystore.jks ${HOME}/opensso/opensso

  echo "Installing and configuring OpenAM administration tools..."
  if [ -e ${HOME}/opensso/tools ] ; then
     rm -rf ${HOME}/opensso/tools
  fi
  unzip -q -d ${HOME}/opensso/tools ${HOME}/tools/ssoAdminTools.zip
  WD=`pwd`
  cd ${HOME}/opensso/tools
  ./setup -p ${HOME}/opensso \
          -l ${HOME}/opensso/tools/log \
          -d ${HOME}/opensso/tools/debug
  cd ${WD}

  echo "Creating Metadata..."
  rm -rf ${HOME}/metadata
  mkdir ${HOME}/metadata
  sed -e "s^xxENTITY_IDxx^${ENTITY_ID}^g" -e "s^xxPROTOCOLxx^${PROTOCOL}^g" -e "s^xxHOST_NAMExx^${FQDN}^g" \
     ${HOME}/templates/metadata/idsim.xml > ${HOME}/metadata/idsim.xml
  sed -e "s^xxENTITY_IDxx^${ENTITY_ID}^g" -e "s^xxPROTOCOLxx^${PROTOCOL}^g" -e "s^xxHOST_NAMExx^${FQDN}^g" \
     ${HOME}/templates/metadata/idsim-extended.xml > ${HOME}/metadata/idsim-extended.xml
  sed -e "s^xxENTITY_IDxx^${ENTITY_ID}^g" -e "s^xxPROTOCOLxx^${PROTOCOL}^g" -e "s^xxHOST_NAMExx^${FQDN}^g" \
     ${HOME}/templates/metadata/cats2.xml > ${HOME}/metadata/cats2.xml
  echo -n "Signing CATS2 metadata..."
  ${JAVA_HOME}/bin/java -jar ${HOME}/tools/Signer.jar \
      ${HOME}/metadata/cats2.xml ${HOME}/metadata/cats2-signed.xml \
      ${HOME}/ICM/keystore.jks idptest1_signing ${SIGALG}

  echo "Configuring OpenAM for SAML Federation"
  echo "SAMLTest1" > ${HOME}/opensso/opensso/adminpw
  chmod 400 ${HOME}/opensso/opensso/adminpw

  echo -e "\
     update-server-cfg -s ${PROTOCOL}://${FQDN}:${PORT}/opensso \
        -a com.iplanet.am.cookie.encode=true\n\
     update-server-cfg -s ${PROTOCOL}://${FQDN}:${PORT}/opensso \
        -a com.iplanet.am.cookie.secure=true\n\
     update-server-cfg -s ${PROTOCOL}://${FQDN}:${PORT}/opensso \
        -a ssoadm.disabled=false\n\
     set-attr-defs -s sunFAMFederationCommon -t global \
        -a CheckCert=off\n\
     set-attr-defs -s sunFAMSAML2Configuration -t global \
        -a bufferLength=4096\n\
     set-attr-defs -s sunFAMSAML2Configuration -t global \
        -a IDPDiscoveryCookieDomain=.${COMMONDOMAIN}\n\
     set-attr-defs -s sunFAMSAML2Configuration -t global \
        -a IDPDiscoveryCookieType=SESSION\n\
     update-auth-instance --realm / --name DataStore \
                          --attributevalues sunAMAuthDataStoreAuthLevel=2\n\
     create-cot --cot GCCF --prefix ${PROTOCOL}://${CDHOSTNAME}.${COMMONDOMAIN}:${PORT}/idpdiscovery \n\
     import-entity --meta-data-file ${HOME}/metadata/idsim.xml \
                   --extended-data-file ${HOME}/metadata/idsim-extended.xml \
                   --cot GCCF \
  " > /tmp/ssoadm.bat

  if [ "${SIGALG}" = "SHA256" ] ; then 
	  echo -e "\
     set-attr-defs -s sunFAMFederationCommon -t global \
        -a SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256\n" \
	 >> /tmp/ssoadm.bat
  fi

  ${HOME}/opensso/tools/opensso/bin/ssoadm do-batch \
         --adminid amadmin \
         --password-file ${HOME}/opensso/opensso/adminpw \
         --batchfile /tmp/ssoadm.bat

   echo "Setting up links on the welcome page..."
   ln -s -f ${HOME}/metadata/cats2-signed.xml ${HOME}/tomcat/webapps/ROOT/cats2-signed.xml
   ln -s -f ${HOME}/tomcat/logs/catalina-daemon.out ${HOME}/tomcat/webapps/ROOT/catalina-daemon.out
   touch ${HOME}/opensso/opensso/log/SAML2.access
   ln -s -f ${HOME}/opensso/opensso/log/SAML2.access ${HOME}/tomcat/webapps/ROOT/SAML2.access
   touch ${HOME}/opensso/opensso/log/SAML2.error
   ln -s -f ${HOME}/opensso/opensso/log/SAML2.error ${HOME}/tomcat/webapps/ROOT/SAML2.error
   touch ${HOME}/opensso/opensso/debug/Federation
   ln -s -f ${HOME}/opensso/opensso/debug/Federation ${HOME}/tomcat/webapps/ROOT/Federation
   ln -s -f ${HOME}/SSL/tomcat.p12 ${HOME}/tomcat/webapps/ROOT/tomcat.p12
   ln -s -f ${HOME}/SSL/tomcat.crt ${HOME}/tomcat/webapps/ROOT/tomcat.crt
   echo
   echo "Installation and configuration of the IDP Simulator is complete!"
   echo
   echo "Current IP Address is ${IPADDR}."
   echo "If you have not registered this in DNS then you will need to manually"
   echo "add an entry to the hosts files of client machines such as:"
   echo -e "${IPADDR}\t${FQDN} ${CDHOSTNAME}.${COMMONDOMAIN}"
   echo
   echo "Once the address is registered you can access the welcome page at:"
   echo "${PROTOCOL}://${FQDN}"
   if [ "${PROTOCOL}" = "https" ] ; then
      echo "(You will need to allow your browser to accept the self-signed certificate)"
   fi
   echo
