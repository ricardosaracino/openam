# idp

[openam files](https://github.com/ricardosaracino/openam)

[openam 11.0.3](https://github.com/ForgeRock/openam-community-edition/releases)



```
systemctl stop firewalld
hostnamectl set-hostname idp3.canadacentral.cloudapp.azure.com

yum update 
yum install git unzip alternatives java-1.8.0-openjdk-devel -y



cd /opt 

git clone https://github.com/ricardosaracino/openam.git

cp -R /opt/openam/openam/apache-tomcat-8.0.35/ /tomcat


mkdir  /tomcat/webapps/opensso

cp -R /opt/openam/openam/AM-eval-6.5.2/* /tomcat/webapps/opensso

cp /opt/openam/openam/IDPDiscovery-6.5.2.war /tomcat/webapps/idpdiscovery.war




cp /opt/openam/openam/setenv.sh /tomcat/bin/

chmod +x /tomcat/bin/*

mkdir /tomcat/logs

cp /tomcat/conf/tomcat-users.xml /tomcat/conf/tomcat-users.xml.old

cp /opt/openam/openam/tomcat-users.xml /tomcat/conf/tomcat-users.xml


/tomcat/bin/startup.sh


amAdmin:SAMLTest1



```
mkdir /opensso-admin-tools
cp -R /opt/openam/openam/AM-SSOAdminTools-5.1.2.5/* /opensso-admin-tools
chmod +x /opensso-admin-tools/setup

export JAVA_HOME="/usr/lib/jvm/java"
cd /opensso-admin-tools
./setup

Path to config files of OpenAM server [/root/openam]:/opensso
Debug Directory [/opensso-admin-tools/debug]:
Log Directory [/opensso-admin-tools/log]:
The scripts are properly setup under directory: /opensso-admin-tools/opensso
Debug directory is /opensso-admin-tools/debug.
Log directory is /opensso-admin-tools/log.
The version of this tools.zip is: OpenAM 14.1.2.5
The version of your server instance is: ForgeRock Access Management 6.5.2 Build 314d553429 (2019-June-17 15:07)


```

```
mkdir opensso-metadata


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

export CATALINA_OPTS="-Xmx1024m -XX:MaxPermSize=256m"


journalctl -f -u tomcat

netstat -tulpn
```

## Configs from ./firstrun

```shell
[root@idp1 tmp]# cat amconfig.txt
     SERVER_URL=http://idp2.canadacentral.cloudapp.azure.com:8080
     DEPLOYMENT_URI=/opensso
     BASE_DIR=/opensso
     locale=en_US
     PLATFORM_LOCALE=en_US
     AM_ENC_KEY=SAMLTest1
     ADMIN_PWD=SAMLTest1
     AMLDAPUSERPASSWD=SAMLTest2
     COOKIE_DOMAIN=idp2.canadacentral.cloudapp.azure.com
     DATA_STORE=embedded
     DIRECTORY_SSL=SIMPLE
     DIRECTORY_SERVER=idp2.canadacentral.cloudapp.azure.com
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
     import-entity --meta-data-file /home/testmgr/metadata/idsim.xml --extended-data-file /home/testmgr/metadata/idsim-extended.xml --cot GCCF
     set-attr-defs -s sunFAMFederationCommon -t global -a SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```
