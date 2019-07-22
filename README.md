# idp

[openam files](https://github.com/ricardosaracino/openam)

[openam git](https://github.com/ForgeRock/openam-community-edition)

### Install
``` shell
yum install java
yum install java-1.7.0-openjdk-devel
yum install tomcat
yum install tomcat-admin-webapps
yum install maven
yum install unzip

/usr/sbin/alternatives --config java
```

### Create User
``` shell
useradd testmgr 
passwd testmgr  
SAMLTest1
usermod -aG wheel testmgr  
```

### Host
```
systemctl stop firewalld
hostnamectl set-hostname idp-server.canadacentral.cloudapp.azure.com
```

### Set Home files
``` shell
cp -r /opt/idp/idsim/home/testmgr/* /home/testmgr/
chown -R testmgr:testmgr  /home/testmgr
find /home/testmgr -type d -exec chmod 755 {} \;
find /home/testmgr -type f -exec chmod 666 {} \;
chmod 777 /home/testmgr/firstrun.sh
```

### Helpers
``` shell
export JAVA_HOME="/usr/lib/jvm/java-1.8.0-ibm-1.8.0.5.35-1jpp.1.el7.x86_64/jre"
source ~/.bashrc
echo $JAVA_HOME

export FQDN="idp-server.canadacentral.cloudapp.azure.com"
export HOSTNAME=`echo ${FQDN} | cut -f 1 -d '.'`
export DOMAINNAME=`expr ${FQDN} : "${HOSTNAME}\(\..*\)"`

journalctl -f -u tomcat
netstat -tulpn
```

## Configs from ./firstrun

``` shell
[root@idp-server tmp]# cat amconfig.txt
     SERVER_URL=http://idp-server.canadacentral.cloudapp.azure.com:8080
     DEPLOYMENT_URI=/opensso
     BASE_DIR=/home/testmgr/opensso
     locale=en_US
     PLATFORM_LOCALE=en_US
     AM_ENC_KEY=SAMLTest1
     ADMIN_PWD=SAMLTest1
     AMLDAPUSERPASSWD=SAMLTest2
     COOKIE_DOMAIN=idp-server.canadacentral.cloudapp.azure.com
     DATA_STORE=embedded
     DIRECTORY_SSL=SIMPLE
     DIRECTORY_SERVER=idp-server.canadacentral.cloudapp.azure.com
     DIRECTORY_PORT=50389
     DIRECTORY_ADMIN_PORT=4444
     DIRECTORY_JMX_PORT=1689
     ROOT_SUFFIX=dc=opensso,dc=java,dc=net
     DS_DIRMGRDN=cn=Directory Manager
     DS_DIRMGRPASSWD=SAMLTest1

[root@idp-server tmp]# cat extensions.cnf
subjectAltName=DNS:idp-server.canadacentral.cloudapp.azure.com,DNS:.

[root@idp-server tmp]# cat ssoadm.bat
     update-server-cfg -s http://idp-server.canadacentral.cloudapp.azure.com:80/opensso -a com.iplanet.am.cookie.encode=true
     update-server-cfg -s http://idp-server.canadacentral.cloudapp.azure.com:80/opensso -a com.iplanet.am.cookie.secure=true
     update-server-cfg -s http://idp-server.canadacentral.cloudapp.azure.com:80/opensso -a ssoadm.disabled=false
     set-attr-defs -s sunFAMFederationCommon -t global -a CheckCert=off
     set-attr-defs -s sunFAMSAML2Configuration -t global -a bufferLength=4096
     set-attr-defs -s sunFAMSAML2Configuration -t global -a IDPDiscoveryCookieDomain=.idpserver.canadacentral.cloudapp.azure.com
     set-attr-defs -s sunFAMSAML2Configuration -t global -a IDPDiscoveryCookieType=SESSION
     update-auth-instance --realm / --name DataStore --attributevalues sunAMAuthDataStoreAuthLevel=2
     create-cot --cot GCCF --prefix http://idp-server.idpserver.canadacentral.cloudapp.azure.com:80/idpdiscovery
     import-entity --meta-data-file /home/testmgr/metadata/idsim.xml --extended-data-file /home/testmgr/metadata/idsim-extended.xml                    --cot GCCF
     set-attr-defs -s sunFAMFederationCommon -t global -a SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```
