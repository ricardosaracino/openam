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


yum install java-1.8.0-openjdk
yum install java-1.7.0-openjdk-devel
yum install java-1.6.0-openjdk-devel


rpm -ivh jdk-8u80-linux-x64.rpm


cd /opt/
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz"
tar xzf jdk-7u79-linux-x64.tar.gz

cd /opt/jdk1.7.0_79/
alternatives --install /usr/bin/java java /opt/jdk1.7.0_79/bin/java 2
alternatives --config java
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

cp /opt/openam/openam/OpenAM-Community-Edition-11.0.3.war /usr/share/tomcat/webapps/opensso.war

cp /opt/openam/openam/IDPDiscovery-6.5.2.war /usr/share/tomcat/webapps/idpdiscovery.war


cp /usr/share/tomcat/conf/tomcat-users.xml /usr/share/tomcat/conf/tomcat-users.xml.old

cp /opt/openam/tomcat/conf/tomcat-users.xml /usr/share/tomcat/conf/

systemctl restart tomcat
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
find /home/testmgr -type d -exec chmod 755 {} \;
find /home/testmgr -type f -exec chmod 644 {} \;
chmod 777 /home/testmgr/firstrun.sh
```

### Helpers
```shell
export JAVA_HOME="/usr/lib/jvm/*version*/jre"
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
