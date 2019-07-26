# SAML authentication with OpenAM & NestJS (Node.js + Express + passport-saml)

[SAML authentication with OpenAM + Node.js](https://qiita.com/nsp01/items/d1b328e5698f6ffd8345)

[Saml Request Decode](https://idp.ssocircle.com/sso/toolbox/samlDecode.jsp)

[Project Source](https://github.com/ricardosaracino/nestjs-sp)

Configure `SELINUX=disabled` in the `/etc/selinux/config` file

### Useful commands
```bash
systemctl stop firewalld

chown -R usr:usr  /dir
find  /dir -type d -exec chmod 755 {} \;
find /dir -type f -exec chmod 644 {} \;

journalctl -f -u 

netstat -tulpn
```

### Hosts
```bash
hostnamectl set-hostname idp5.canadacentral.cloudapp.azure.com
echo "52.237.16.226 idp5.canadacentral.cloudapp.azure.com" | tee -a /etc/hosts
```

### Install Java
```bash
yum update
yum install git unzip alternatives java-1.8.0-openjdk-devel -y

(/usr/lib/jvm/java) 
alternatives --config java
```

### Set Up Tomcat
```bash
cd /opt 

git clone https://github.com/ricardosaracino/openam.git

cp -R /opt/openam/apache-tomcat-8.0.35/ /tomcat

cp -R /opt/openam/AM-eval-6.5.2/ /tomcat/webapps/opensso

cp /opt/openam/IDPDiscovery-6.5.2.war /tomcat/webapps/idpdiscovery.war


cp /opt/openam/setenv.sh /tomcat/bin/

chmod +x /tomcat/bin/*

mkdir /tomcat/logs

cp -R /tomcat/conf/ /tomcat/conf-bak

(edit pw)
cp /opt/openam/tomcat-users.xml /tomcat/conf/tomcat-users.xml
cp /opt/openam/server.xml /tomcat/conf/server.xml


/tomcat/bin/startup.sh
/tomcat/bin/shutdown.sh
```


### Run Config
http://idp5.canadacentral.cloudapp.azure.com/opensso

[opensso.conf](opensso.conf) for configurator.jar

`mkdir /opensso`

#### General 

amadmin:testtest

#### Server Settings 

Configuration Directory: /opensso/opensso`

#### Configuration Store

Port: 50389

Admin Port: 4444

JMX Port: 1689

Encryption Key: KiIvlMXcv9GY5GoDriaOLwFksJNjLgB8

Root Suffix: dc=openam,dc=forgerock,dc=org

#### User Data Store Settings

OpenAM User Data Store

#### Identities 
Create new identity

test0001:test0001

test0001@test.tst


#### OpenDJ (LDAP)

You should see the test user

```bash
cd /opensso/opensso/opends/bin

./ldapsearch -p 50389 -D "cn=Directory Manager" -w SAMLTest1 --baseDN dc=openam,dc=forgerock,dc=org objectclass=*
./ldapsearch -p 50389 -D "cn=Directory Manager" -w SAMLTest1 --baseDN dc=openam,dc=forgerock,dc=org objectclass=person
```


### Set up admin

```bash
mkdir /opensso/ssoadm
cp -R /opt/openam/AM-SSOAdminTools-5.1.2.5/ /opensso/ssoadm
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



```bash
echo "testtest" > /tmp/adminpw
chmod 400 /tmp/adminpw

./ssoadm export-svc-cfg -u amadmin -f /tmp/adminpw -e ricardosaracino -o /opensso/scv-config-inital.xml
```


### Configure SAMLv2 Provider

#### Create Hosted Identity Provider


#### Configure Remote Service Provider

Remote SP metadata

```xml
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="ep-localhost">
    <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">

        <SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
                             Location="http://localhost:3000/auth/logout/callback"/>

        <AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
                                  Location="http://localhost:3000/auth/login/callback" index="0"/>
        <AssertionConsumerService Binding="urn:oasis:names:tc:SAML:1.0:profiles:browser-post"
                                  Location="http://localhost:3000/auth/login/callback" index="1"/>
        <AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Artifact"
                                  Location="http://localhost:3000/auth/login/callback" index="2"/>
        <AssertionConsumerService Binding="urn:oasis:names:tc:SAML:1.0:profiles:artifact-01"
                                  Location="http://localhost:3000/auth/login/callback" index="3"/>
        <AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:profiles:holder-of-key:SSO:browser"
                                  Location="http://localhost:3000/auth/login/callback" index="4"/>
    </SPSSODescriptor>
    <ContactPerson contactType="technical">
        <GivenName>Administrator</GivenName>
        <EmailAddress>noreply@example.org</EmailAddress>
    </ContactPerson>
</EntityDescriptor>
```

Passport

```typescript
const passportOpenOptions = {
    issuer: 'ep-localhost', // match metadata entityID
    callbackUrl: 'http://localhost:3000/api/auth/callback',
    entryPoint: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/SSORedirect/metaAlias/idp',
    logoutUrl: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/IDPSloRedirect/metaAlias/idp',
};
```


## GCCF 


```bash
mkdir /opensso/metadata

sed -e "s^xxENTITY_IDxx^`hostname`^g" -e "s^xxPROTOCOLxx^http^g" -e "s^xxHOST_NAMExx^`hostname`^g" /opt/openam/templates/metadata/idsim.xml > /opensso/metadata/idsim.xml

sed -e "s^xxENTITY_IDxx^`hostname`^g" -e "s^xxPROTOCOLxx^http^g" -e "s^xxHOST_NAMExx^`hostname`^g" /opt/openam/templates/metadata/idsim-extended.xml > /opensso/metadata/idsim-extended.xml

sed -e "s^xxENTITY_IDxx^`hostname`^g" -e "s^xxPROTOCOLxx^http^g" -e "s^xxHOST_NAMExx^`hostname`^g" /opt/openam/templates/metadata/cats2.xml > /opensso/metadata/cats2.xml

(noticed this /tomcat/webapps/opensso/WEB-INF/template/keystore/keystore.jks)

java -jar /opt/openam/Signer.jar /opensso/metadata/cats2.xml /opensso/metadata/cats2-signed.xml /opt/openam/keystore.jks idptest1_signing SHA256
```

### Service Configurations

http://idp4.canadacentral.cloudapp.azure.com/opensso/services.jsp

[openssoadm.conf](openssoadm.conf) contains batch (DONT RUN)

### sunFAMFederationCommon
```bash
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
```bash
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
```bash
./ssoadm get-attr-defs -u amadmin -f /tmp/adminpw -s sunAMAuthDataStoreAuthLevel -t global
```

### Circle of Trust GCCF
```bash
./ssoadm create-cot -u amadmin -f /tmp/adminpw --cot GCCF -p http://idp4.canadacentral.cloudapp.azure.com:80/idpdiscovery

Circle of trust, GCCF was created.


./ssoadm import-entity -u amadmin -f /tmp/adminpw --meta-data-file /opensso/metadata/idsim.xml --extended-data-file /opensso/metadata/idsim-extended.xml --cot GCCF

Import file, /opensso/metadata/idsim.xml.
Import file, /opensso/metadata/idsim-extended.xml.


./ssoadm update-auth-instance -u amadmin -f /tmp/adminpw  --realm / --name DataStore --attributevalues sunAMAuthDataStoreAuthLevel=2

Authentication Instance was updated.
```
