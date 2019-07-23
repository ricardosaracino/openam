# idp

[openam files](https://github.com/ricardosaracino/openam)

[openam git](https://github.com/ForgeRock/openam-community-edition)

[openam 11.0.3](https://github.com/ForgeRock/openam-community-edition/releases)

### Install
```shell
yum update 
yum install java
yum install tomcat
yum install tomcat-admin-webapps
yum install maven
yum install alternatives
yum install unzip
yum install git

yum install java-1.8.0-openjdk-devel
yum install java-1.7.0-openjdk-devel
yum install java-1.6.0-openjdk-devel

alternatives --config java
```


```
mv /opt/openam/tomcat .. /tomcat

chmod +x /tomcat/bin/*

cp -r /opt/openam/openam/AM-eval-6.5.2/AM-eval-6.5.2/* /tomcat/webapps/opensso

cp /opt/openam/openam/IDPDiscovery-6.5.2.war /tomcat/webapps/idpdiscovery.war

cp /tomcat/conf/tomcat-users.xml /tomcat/conf/tomcat-users.xml.old

cp /opt/openam/tomcat/conf/tomcat-users.xml /usr/share/tomcat/conf/

```



















### Init
```
systemctl stop firewalld

systemctl start tomcat
systemctl status tomcat
systemctl enable tomcat

hostnamectl set-hostname idp1.canadacentral.cloudapp.azure.com

alternatives --config java
```


```shell
mv /usr/share/tomcat/webapps/ROOT /usr/share/tomcat/webapps/tomcat

cp -r /opt/openam/tomcat/webapps/ROOT /usr/share/tomcat/webapps/ROOT

cp -r /opt/openam/openam/AM-eval-6.5.2/AM-eval-6.5.2/* /usr/share/tomcat/webapps/opensso

cp /opt/openam/openam/IDPDiscovery-6.5.2.war /usr/share/tomcat/webapps/idpdiscovery.war


cp /usr/share/tomcat/conf/tomcat-users.xml /usr/share/tomcat/conf/tomcat-users.xml.old

cp /opt/openam/tomcat/conf/tomcat-users.xml /usr/share/tomcat/conf/

mkdir /usr/share/tomcat/opensso


chown -R root:tomcat /usr/share/tomcat/webapps/
find  /usr/share/tomcat/webapps/ -type d -exec chmod 775 {} \;
find /usr/share/tomcat/webapps/ -type f -exec chmod 664 {} \;

systemctl restart tomcat




testmgr@idp1 AM-SSOAdminTools-5.1.2.5]$ ./setup



```

### Create User
```shell
useradd testmgr 
passwd testmgr  
SAMLTest1
usermod -aG wheel testmgr  
```

```shell
mkdir /home/testmgr/tools
mkdir /home/testmgr/opensso
mkdir /home/testmgr/SSL

cp /usr/lib/jvm/jre/lib/security/cacerts /home/testmgr/SSL/jssecacerts
cp /opt/openam/openam/AM-SSOConfiguratorTools-5.1.2.5/openam-configurator-tool-14.1.2.5.jar /home/testmgr/tools/configurator.jar
cp /opt/openam/openam/amconfig.txt /home/testmgr/tools/amconfig.txt (editfile)

java -Dhttps.protocols=TLSv1 -Djavax.net.ssl.trustStore=${HOME}/SSL/jssecacerts -Djavax.net.ssl.trustStorePassword=changeit -jar /home/testmgr/tools/configurator.jar -f /home/testmgr/tools/amconfig.txt


```


### Running tomcat as root
```
https://access.redhat.com/documentation/en-US/Red_Hat_JBoss_Portal/6.1/html/Administration_and_Configuration_Guide/chap-OpenAM.html
http://www.janua.fr/how-to-create-and-deploy-a-new-openam-tomcat-instance/
https://bugster.forgerock.org/jira/browse/OPENAM-2859?jql=text%20~%20"opendj.zip%20(No%20such%20file%20or%20directory)"

https://www.youtube.com/watch?v=5X1cWnMDtH0

The file /lib/systemd/system/tomcat.service should not be changed. If you need to overwrite them, just copy the file to /etc/systemd/system/tomcat.service, and edit the /etc/systemd/system/tomcat.service file.

After you change the file, ask systemd to reload the config:

systemctl daemon-reload

this didnt work

javax.servlet.ServletException: An error occurred while processing this request. Contact your administrator. com.sun.identity.setup.AMSetupFilter.doFilter(AMSetupFilter.java:148) org.forgerock.openam.audit.context.AuditContextFilter.doFilter(AuditContextFilter.java:46)
```



### Set Home files
```shell
cp -r /opt/idp/idsim/home/testmgr/* /home/testmgr/
chown -R testmgr:testmgr  /home/testmgr
find  /usr/share/tomcat/opensso -type d -exec chmod 755 {} \;
find /home/testmgr -type f -exec chmod 644 {} \;
chmod 777 /home/testmgr/firstrun.sh
```

### Helpers
```shell
export JAVA_HOME="/usr/lib/jvm/java/jre"
source ~/.bashrc
echo $JAVA_HOME

export JAVA_OPTS="-Dcom.iplanet.am.cookie.c66Encode=true -Djavax.net.ssl.trustStore=${HOME}/SSL/jssecacerts"
export CATALINA_OPTS="-Xmx1024m -XX:MaxPermSize=256m"

export FQDN="idp1.canadacentral.cloudapp.azure.com"
export HOSTNAME=`echo ${FQDN} | cut -f 1 -d '.'`
export DOMAINNAME=`expr ${FQDN} : "${HOSTNAME}\(\..*\)"`

journalctl -f -u tomcat

netstat -tulpn
```

## Configs from ./firstrun

```shell
[root@idp1 tmp]# cat amconfig.txt
     SERVER_URL=http://idp1.canadacentral.cloudapp.azure.com:8080
     DEPLOYMENT_URI=/opensso
     BASE_DIR=/home/testmgr/opensso
     locale=en_US
     PLATFORM_LOCALE=en_US
     AM_ENC_KEY=SAMLTest1
     ADMIN_PWD=SAMLTest1
     AMLDAPUSERPASSWD=SAMLTest2
     COOKIE_DOMAIN=idp1.canadacentral.cloudapp.azure.com
     DATA_STORE=embedded
     DIRECTORY_SSL=SIMPLE
     DIRECTORY_SERVER=idp1.canadacentral.cloudapp.azure.com
     DIRECTORY_PORT=50389
     DIRECTORY_ADMIN_PORT=4444
     DIRECTORY_JMX_PORT=1689
     ROOT_SUFFIX=dc=opensso,dc=java,dc=net
     DS_DIRMGRDN=cn=Directory Manager
     DS_DIRMGRPASSWD=SAMLTest1

[root@idp1 tmp]# cat extensions.cnf
subjectAltName=DNS:idp1.canadacentral.cloudapp.azure.com,DNS:.

[root@idp1 tmp]# cat ssoadm.bat
     update-server-cfg -s http://idp1.canadacentral.cloudapp.azure.com:80/opensso -a com.iplanet.am.cookie.encode=true
     update-server-cfg -s http://idp1.canadacentral.cloudapp.azure.com:80/opensso -a com.iplanet.am.cookie.secure=true
     update-server-cfg -s http://idp1.canadacentral.cloudapp.azure.com:80/opensso -a ssoadm.disabled=false
     set-attr-defs -s sunFAMFederationCommon -t global -a CheckCert=off
     set-attr-defs -s sunFAMSAML2Configuration -t global -a bufferLength=4096
     set-attr-defs -s sunFAMSAML2Configuration -t global -a IDPDiscoveryCookieDomain=.idpserver.canadacentral.cloudapp.azure.com
     set-attr-defs -s sunFAMSAML2Configuration -t global -a IDPDiscoveryCookieType=SESSION
     update-auth-instance --realm / --name DataStore --attributevalues sunAMAuthDataStoreAuthLevel=2
     create-cot --cot GCCF --prefix http://idp1.idpserver.canadacentral.cloudapp.azure.com:80/idpdiscovery
     import-entity --meta-data-file /home/testmgr/metadata/idsim.xml --extended-data-file /home/testmgr/metadata/idsim-extended.xml                    --cot GCCF
     set-attr-defs -s sunFAMFederationCommon -t global -a SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```
