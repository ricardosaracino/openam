# idp

[SAML authentication with OpenAM + Node.js](https://qiita.com/nsp01/items/d1b328e5698f6ffd8345)

[openam files](https://github.com/ricardosaracino/openam)

[openam 11.0.3](https://github.com/ForgeRock/openam-community-edition/releases)

>NOTE DIRECTORIES WERE RESTRUCTURED

```
systemctl stop firewalld
hostnamectl set-hostname idp4.canadacentral.cloudapp.azure.com
echo "40.85.252.53 idp4.canadacentral.cloudapp.azure.com" | tee -a /etc/hosts

yum update
(devel gives us /usr/lib/jvm/java) 
yum install git unzip alternatives java-1.8.0-openjdk-devel -y



cd /opt 

git clone https://github.com/ricardosaracino/openam.git

cp -R /opt/openam/apache-tomcat-8.0.35/ /tomcat


mkdir  /tomcat/webapps/opensso

cp -R /opt/openam/AM-eval-6.5.2/* /tomcat/webapps/opensso

cp /opt/openam/IDPDiscovery-6.5.2.war /tomcat/webapps/idpdiscovery.war

mkdir  /tomcat/webapps/gccf

cp -R /opt/openam/gccf/* /tomcat/webapps/gccf




cp /opt/openam/setenv.sh /tomcat/bin/

chmod +x /tomcat/bin/*

mkdir /tomcat/logs

mkdir /tomcat/conf-bak

cp /tomcat/conf/* /tomcat/conf-bak

(edit pw)
cp /opt/openam/tomcat-users.xml /tomcat/conf/tomcat-users.xml
cp /opt/openam/server.xml /tomcat/conf/server.xml


/tomcat/bin/startup.sh
/tomcat/bin/shutdown.sh

amadmin:SAMLTest1
```


```

(this could be a home dir)
mkdir /opensso/

run setup

amadmin: SAMLTest1

Port: 50389
Admin Port: 4444
JMX Port: 1689
Encryption Key: KiIvlMXcv9GY5GoDriaOLwFksJNjLgB8
Root Suffix: dc=openam,dc=forgerock,dc=org

Directory Name: idp4.canadacentral.cloudapp.azure.com
Port: 389
Root Suffix: dc=openam,dc=forgerock,dc=org
Login ID: cn=Directory Manager
Password: SAMLTest2
```


```
mkdir /opensso/ssoadm
cp -R /opt/openam/AM-SSOAdminTools-5.1.2.5/* /opensso/ssoadm
chmod +x /opensso/ssoadm/setup

export JAVA_HOME="/usr/lib/jvm/java"
cd /opensso/ssoadm
./setup

Path to config files of OpenAM server [/root/openam]:/opensso/opensso
Debug Directory [/opensso/ssoadm/debug]:
Log Directory [/opensso/ssoadm/log]:
The scripts are properly setup under directory: /opensso/ssoadm/opensso
Debug directory is /opensso/ssoadm/debug.
Log directory is /opensso/ssoadm/log.
The version of this tools.zip is: OpenAM 14.1.2.5
The version of your server instance is: ForgeRock Access Management 6.5.2 Build 314d553429 (2019-June-17 15:07)
```


```
mkdir /opensso/metadata

sed -e "s^xxENTITY_IDxx^`hostname`^g" -e "s^xxPROTOCOLxx^http^g" -e "s^xxHOST_NAMExx^`hostname`^g" /opt/openam/templates/metadata/idsim.xml > /opensso/metadata/idsim.xml

sed -e "s^xxENTITY_IDxx^`hostname`^g" -e "s^xxPROTOCOLxx^http^g" -e "s^xxHOST_NAMExx^`hostname`^g" /opt/openam/templates/metadata/idsim-extended.xml > /opensso/metadata/idsim-extended.xml

sed -e "s^xxENTITY_IDxx^`hostname`^g" -e "s^xxPROTOCOLxx^http^g" -e "s^xxHOST_NAMExx^`hostname`^g" /opt/openam/templates/metadata/cats2.xml > /opensso/metadata/cats2.xml

(noticed this /tomcat/webapps/opensso/WEB-INF/template/keystore/keystore.jks)

java -jar /opt/openam/Signer.jar /opensso/metadata/cats2.xml /opensso/metadata/cats2-signed.xml /opt/openam/keystore.jks idptest1_signing SHA256
```


## Service Configurations

http://idp4.canadacentral.cloudapp.azure.com/opensso/services.jsp

```
echo "SAMLTest1" > /tmp/adminpw
chmod 400 /tmp/adminpw
```

### Backup
``` 
./ssoadm export-svc-cfg -u amadmin -f /tmp/adminpw -e ricardosaracino -o /opensso/scv-config.xml
./ssoadm import-svc-cfg -u amadmin -f /tmp/adminpw -e ricardosaracino -X /opensso/scv-config.xml
```


### sunFAMFederationCommon
```
./ssoadm get-attr-defs -u amadmin -f /tmp/adminpw -s sunFAMFederationCommon -t global

CheckCert=off
ConfigurationClass=com.sun.identity.plugin.configuration.impl.ConfigurationInstanceImpl
TransformationAlgorithm=http://www.w3.org/2001/10/xml-exc-c14n#
SAMLErrorPageHTTPBinding=HTTP-POST
MonAgentClass=com.sun.identity.plugin.monitoring.impl.AgentProvider
MaxContentLength=20480
QuerySignatureAlgorithmRSA=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
SAMLErrorPageURL=/saml2/jsp/saml2error.jsp
SignatureProviderClass=com.sun.identity.saml.xmlsig.AMSignatureProvider
KeyProviderClass=com.sun.identity.saml.xmlsig.JKSKeyProvider
QuerySignatureAlgorithmEC=http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512
MonSAML2Class=com.sun.identity.plugin.monitoring.impl.FedMonSAML2SvcProvider
MaskGenerationFunction=http://www.w3.org/2009/xmlenc11#mgf1sha256
SessionProviderClass=com.sun.identity.plugin.session.impl.FMSessionProvider
CannonicalizationAlgorithm=http://www.w3.org/2001/10/xml-exc-c14n#
MonIDFFClass=com.sun.identity.plugin.monitoring.impl.FedMonIDFFSvcProvider
LoggerClass=com.sun.identity.plugin.log.impl.LogProvider
MonSAML1Class=com.sun.identity.plugin.monitoring.impl.FedMonSAML1SvcProvider
DatastoreClass=com.sun.identity.plugin.datastore.impl.IdRepoDataStoreProvider
QuerySignatureAlgorithmDSA=http://www.w3.org/2009/xmldsig11#dsa-sha256
PasswordDecoderClass=com.sun.identity.saml.xmlsig.FMPasswordDecoder
DigestAlgorithm=http://www.w3.org/2001/04/xmlenc#sha256

./ssoadm set-attr-defs -u amadmin -f /tmp/adminpw -s sunFAMFederationCommon -t global -a CheckCert=off

./ssoadm set-attr-defs -u amadmin -f /tmp/adminpw -s sunFAMFederationCommon -t global -a SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```

### sunFAMSAML2Configuration
```
./ssoadm get-attr-defs -u amadmin -f /tmp/adminpw -s sunFAMSAML2Configuration -t global

NameIDInfoKeyAttribute=sun-fm-saml2-nameid-infokey
EncryptedKeyInKeyInfo=true
CacheCleanupInterval=600
NameIDInfoAttribute=sun-fm-saml2-nameid-info
IDPDiscoveryCookieDomain=idp4.canadacentral.cloudapp.azure.com
IDPDiscoveryURLScheme=https
SigningCertValidation=false
CACertValidation=false
failOverEnabled=false
IDPDiscoveryCookieType=PERSISTENT
bufferLength=2048
XMLSigningClass=com.sun.identity.saml2.xmlsig.FMSigProvider
XMLEncryptionClass=com.sun.identity.saml2.xmlenc.FMEncProvider


./ssoadm set-attr-defs -u amadmin -f /tmp/adminpw -s sunFAMSAML2Configuration -t global -a bufferLength=4096

```


### sunAMAuthDataStoreService
```
./ssoadm get-attr-defs -u amadmin -f /tmp/adminpw -s sunAMAuthDataStoreAuthLevel -t global

```

### Circle of Trust

[Applications - Federation circlesOfTrust GCCF](http://idp4.canadacentral.cloudapp.azure.com/opensso/XUI/#realms/%2F/applications-federation/circlesOfTrust/edit/GCCF)

```
./ssoadm create-cot -u amadmin -f /tmp/adminpw --cot GCCF -p http://idp4.canadacentral.cloudapp.azure.com:80/idpdiscovery

Circle of trust, GCCF was created.


./ssoadm import-entity -u amadmin -f /tmp/adminpw --meta-data-file /opensso/metadata/idsim.xml --extended-data-file /opensso/metadata/idsim-extended.xml --cot GCCF

Import file, /opensso/metadata/idsim.xml.
Import file, /opensso/metadata/idsim-extended.xml.


./ssoadm update-auth-instance -u amadmin -f /tmp/adminpw  --realm / --name DataStore --attributevalues sunAMAuthDataStoreAuthLevel=2

Authentication Instance was updated.
```


Create a SAMLv2 Identity Provider on this Server

http://idp4.canadacentral.cloudapp.azure.com/opensso/task/CreateHostedIDP?realm=%2F

```
ln -s -f /opensso-metadata/cats2-signed.xml /tomcat/webapps/gccf/cats2-signed.xml
ln -s -f /tomcat/logs/catalina.out /tomcat/webapps/gccf/catalina-daemon.out
touch /opensso/opensso/log/SAML2.access
ln -s -f /opensso/opensso/log/SAML2.access /tomcat/webapps/ROOT/SAML2.access
touch /opensso/opensso/log/SAML2.error
ln -s -f /opensso/opensso/log/SAML2.error /tomcat/webapps/ROOT/SAML2.error
ln -s -f /opensso/opensso/debug/Federation /tomcat/webapps/ROOT/Federation
```


```
chown -R usr:usr  /dir
find  /dir -type d -exec chmod 755 {} \;
find /dir -type f -exec chmod 644 {} \;

journalctl -f -u 

netstat -tulpn
```

## Configs
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
```

```
update-server-cfg -s http://idp3.canadacentral.cloudapp.azure.com:8080/opensso -a com.iplanet.am.cookie.encode=true
update-server-cfg -s http://idp3.canadacentral.cloudapp.azure.com:8080/opensso -a com.iplanet.am.cookie.secure=true
update-server-cfg -s http://idp3.canadacentral.cloudapp.azure.com:8080/opensso -a ssoadm.disabled=false
set-attr-defs -s sunFAMFederationCommon -t global -a CheckCert=off
set-attr-defs -s sunFAMSAML2Configuration -t global -a bufferLength=4096
set-attr-defs -s sunFAMSAML2Configuration -t global -a IDPDiscoveryCookieDomain=idp3.canadacentral.cloudapp.azure.com
set-attr-defs -s sunFAMSAML2Configuration -t global -a IDPDiscoveryCookieType=SESSION
update-auth-instance --realm / --name DataStore --attributevalues sunAMAuthDataStoreAuthLevel=2
create-cot --cot GCCF --prefix http://idp3.canadacentral.cloudapp.azure.com:8080/idpdiscovery
import-entity --meta-data-file /opensso-metadata/idsim.xml --extended-data-file /opensso-metadata/idsim-extended.xml --cot GCCF
set-attr-defs -s sunFAMFederationCommon -t global -a SignatureAlgorithm=http://www.w3.org/2001/04/xmldsig-more#rsa-sha256
```
