# SAML authentication with OpenAM & NestJS (Node.js + Express + passport-saml)

[Project Source](https://github.com/ricardosaracino/nestjs-sp)

[SAML authentication with OpenAM + Node.js](https://qiita.com/nsp01/items/d1b328e5698f6ffd8345)

### Useful commands
```bash
systemctl stop firewalld

chown -R usr:usr  /dir
find  /dir -type d -exec chmod 755 {} \;
find /dir -type f -exec chmod 644 {} \;

journalctl -f -u 

netstat -tulpn

Configure `SELINUX=disabled` in the `/etc/selinux/config` file
```

[Saml Request Decode](https://idp.ssocircle.com/sso/toolbox/samlDecode.jsp)


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


#### Backup
```bash
echo "testtest" > /tmp/adminpw
chmod 400 /tmp/adminpw

./ssoadm export-svc-cfg -u amadmin -f /tmp/adminpw -e ricardosaracino -o /opensso/scv-config-inital.xml
```

Before copying new files take a backup of existing files (.keypass, .storepass, keystore.jks) from OpenAM 
```bash
mkdir /opensso/keystore-inital

```

#### Generate Self-Signed Certs

https://www.samltool.com/self_signed_certs.php


#### Generate Keys

 https://idmdude.com/2014/02/09/how-to-configure-openam-signing-keys/

Initially Key store looks like this
```bash

keytool -list -keystore /opensso/opensso/opensso/keystore.jks
Enter keystore password: (no password hit enter)

*****************  WARNING WARNING WARNING  *****************
* The integrity of the information stored in your keystore  *
* has NOT been verified!  In order to verify its integrity, *
* you must provide your keystore password.                  *
*****************  WARNING WARNING WARNING  *****************

Keystore type: jks
Keystore provider: SUN

Your keystore contains 2 entries

rsajwtsigningkey, May 19, 2016, PrivateKeyEntry,
Certificate fingerprint (SHA1): 55:4A:D7:8F:66:23:58:09:5B:49:A9:CF:97:EB:DB:6A:88:B0:5D:03
test, Apr 3, 2018, PrivateKeyEntry,
Certificate fingerprint (SHA1): 66:17:08:81:9C:E6:7F:6D:DC:24:E1:FB:24:BA:90:2C:86:F0:64:D7
```


https://gopithetechy.blogspot.com/2016/07/openam-saml-response-signing-pre.html

```bash
mkdir /opensso/idpkeys

cd /opensso/idpkeys

```

Generate a private key and corresponding public certificate         
```bash
openssl req -new -x509 -newkey rsa:2048 -keyout privatekey.pem -days 3650 -subj "/CN=idp5.canadacentral.cloudapp.azure.com" -out x509certificate.cer

passphrase: changeit
```

Generate Public Key (for sp)
```bash
openssl x509 -in x509certificate.cer -pubkey -noout > publickey-sp.pem
```


View
```bash
openssl x509 -in x509certificate.cer
```

Generate a private key and corresponding public certificate         
```bash
openssl pkcs12 -export -inkey  privatekey.pem -in x509certificate.cer -name idpsigningkey -out idpkeystore.p12

Enter pass phrase for privatekey.pem: changeit
Enter Export Password: changeit
Verifying - Enter Export Password: changeit
```

Add to existing store
```bash
keytool -importkeystore -srckeystore idpkeystore.p12 -srcstoretype pkcs12 -srcalias idpsigningkey -destkeystore /opensso/opensso/opensso/keystore.jks -deststoretype jks -destalias idpsigningkey -storepass `cat /opensso/opensso/opensso/.storepass`
keytool -importkeystore -srckeystore idpkeystore.p12 -srcstoretype pkcs12 -srcalias idpsigningkey -destkeystore /opensso/opensso/opensso/keystore.jceks -deststoretype jceks -destalias idpsigningkey -storepass `cat /opensso/opensso/opensso/.storepass`

password:changeit
```

Create new store (I COULD NOT GET THIS WORKING)

Import key store to create a new key store with name keystore.jks   
```bash
keytool -importkeystore -srckeystore idpkeystore.p12 -srcstoretype pkcs12 -srcalias idpsigningkey -destkeystore /tmp/keystore.jks -deststoretype JKS -destalias idpsigningkey
Importing keystore idpkeystore.p12 to keystore.jks...
Enter destination keystore password: changeit
Re-enter new password: changeit
Enter source keystore password: changeit

Warning:
The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore keystore.jks -destkeystore keystore.jks -deststoretype pkcs12".
```

Creating password files
```bash
echo changeit > /tmp/storepass.cleartext
echo changeit > /tmp/keypass.cleartext

/opensso/ssoadm/opensso/bin/ampassword -e /tmp/keypass.cleartext > /tmp/.keypass
/opensso/ssoadm/opensso/bin/ampassword -e /tmp/storepass.cleartext > /tmp/.storepass
```

To validate the encrypted password we access the URL
http://idp5.canadacentral.cloudapp.azure.com/opensso/encode.jsp

Back up the files
```bash
cp /opensso/opensso/opensso/.keypass /opensso/keystore-inital
cp /opensso/opensso/opensso/.storepass /opensso/keystore-inital
cp /opensso/opensso/opensso/keystore.jks /opensso/keystore-inital
cp /opensso/opensso/opensso/keystore.jceks /opensso/keystore-inital

cp /opensso/keystore-inital/keystore.jks /opensso/opensso/opensso/
cp /opensso/keystore-inital/.keypass /opensso/opensso/opensso/
cp /opensso/keystore-inital/.storepass /opensso/opensso/opensso/
```

Overwrite the files
```bash
cp /tmp/keystore.jceks /opensso/opensso/opensso/
cp /tmp/keystore.jks /opensso/opensso/opensso/
cp /tmp/.keypass /opensso/opensso/opensso/
cp /tmp/.storepass /opensso/opensso/opensso/

chmod 400 /opensso/opensso/opensso/.keypass
chmod 400 /opensso/opensso/opensso/.storepass
```

cp /opensso/keystore-inital/keystore.jceks /opensso/opensso/opensso/
cp /opensso/keystore-inital/keystore.jks /opensso/opensso/opensso/
cp /opensso/keystore-inital/.keypass /opensso/opensso/opensso/
cp /opensso/keystore-inital/.storepass /opensso/opensso/opensso/


keytool -importkeystore -srckeystore idpkeystore.p12 -srcstoretype pkcs12 -srcalias idpsigningkey -destkeystore /opensso/opensso/opensso/keystore.jceks -deststoretype jceks -destalias idpsigningkey 

keytool -importkeystore -srckeystore idpkeystore.p12 -srcstoretype pkcs12 -srcalias idpsigningkey -destkeystore /opensso/opensso/opensso/keystore.jceks -deststoretype jceks -destalias idpsigningkey -storepass `cat /opensso/opensso/opensso/.storepass`

### Configure SAMLv2 Provider

#### Create Hosted Identity Provider


### Configure Remote Service Provider

#### Generate Metadata

[Self Signed Certs](https://www.samltool.com/self_signed_certs.php)

[SP Metadata](https://www.samltool.com/sp_metadata.php)

- Set AuthnRequestsSigned to True

- Set WantAssertionsSigned to True

- Set NameIdFormat to urn:oasis:names:tc:SAML:2.0:nameid-format:persistent

- Paste contents of private key in privatekey.pem file 
 
- Verify cert with `λ openssl x509 -hash -noout -in cert.pem` newlines should be crlf

- Paste Metadata in Custom Service Providers


#### Import Certificate

[Importing the certificate into the truststore](https://backstage.forgerock.com/knowledge/kb/article/a94909995)

Paste contents of certificate in `/tmp/sp.cer`

```bash
cp /usr/lib/jvm/java/jre/lib/security/cacerts /opensso/keystore-inital/java-cacerts

keytool -importcert -alias nodejs-sp -file /tmp/sp.cer -trustcacerts -keystore /usr/lib/jvm/java/jre/lib/security/cacerts -storetype JKS

Enter keystore password: changeit
```

#### Raw Metadata
```xml
<?xml version="1.0"?>
<md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" validUntil="2019-08-02T17:55:05Z"
                     cacheDuration="PT604800S" entityID="nestjs-sp-0020" ID="pfxc7ace147-edc3-343f-aa03-12571cd9caa6">

    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:SignedInfo>
            <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
            <ds:Reference URI="#pfxc7ace147-edc3-343f-aa03-12571cd9caa6">
                <ds:Transforms>
                    <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                    <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                </ds:Transforms>
                <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                <ds:DigestValue>1qDHa2TiHTjxPIhg69+9Cm2f3+o=</ds:DigestValue>
            </ds:Reference>
        </ds:SignedInfo>
        <ds:SignatureValue>
            e1ggTiyNk1BUIphhbRvrcioT/yVYyd8Hrkkg7DSG/zVvjLwU2eeKkt4EnyYcVN0St/19Uo7hiiTZCdb/eOf7dk+2u53EAYAec4NyNBPjaJ713dcsCyHUDZqKfzt54nIYBvOX5ZY72Y8/nDoXhOtvRpe5PKrxj3RaTD/iRHF624w=
        </ds:SignatureValue>
        <ds:KeyInfo>
            <ds:X509Data>
                <ds:X509Certificate>
                    MIICRjCCAa+gAwIBAgIBADANBgkqhkiG9w0BAQUFADBAMQswCQYDVQQGEwJjYTELMAkGA1UECAwCT04xEDAOBgNVBAoMB3JpY2FyZG8xEjAQBgNVBAMMCW5lc3Rqcy1zcDAeFw0xOTA3MzExMTU3NTVaFw0yOTA3MjgxMTU3NTVaMEAxCzAJBgNVBAYTAmNhMQswCQYDVQQIDAJPTjEQMA4GA1UECgwHcmljYXJkbzESMBAGA1UEAwwJbmVzdGpzLXNwMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqYZAnxwaIUW9JspCwClPVAjjNnoUZMYN9MWmO6n1nCOxRn5g4wIbIyESP89pw5ntunOW/1rn5weGF3U+d0kEx2WgdvUzkajg6Z2fXm+I1fcmKK+/DUQLBjSPWDiDUX8ZE0JqexH61QYe4REoK9z05cR62ZhIP1jCPMRAR46UctQIDAQABo1AwTjAdBgNVHQ4EFgQUc5IDRIxDZAh8ejTy4l6mpEwvg8MwHwYDVR0jBBgwFoAUc5IDRIxDZAh8ejTy4l6mpEwvg8MwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQAuN4ouHg0u+I0ADpk7KhT90VqbzOLMCs0qcpHKO0gVZD4nIK4kC5JgytAL0hZUcUsAJGAak19rRi2ZZgF+c0Lf/GA+4sVSj4v5vhMWqwj4q6Xfo8cGG2ij6T7A1cFeRntFf0Ens8vvmKBZ7ce+Hs3zWQlmf+sF/qY2a6eILBLIxQ==
                </ds:X509Certificate>
            </ds:X509Data>
        </ds:KeyInfo>
    </ds:Signature>


    <md:SPSSODescriptor AuthnRequestsSigned="true" WantAssertionsSigned="true"
                        protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
        <md:KeyDescriptor use="signing">
            <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                <ds:X509Data>
                    <ds:X509Certificate>
                        MIICRjCCAa+gAwIBAgIBADANBgkqhkiG9w0BAQUFADBAMQswCQYDVQQGEwJjYTELMAkGA1UECAwCT04xEDAOBgNVBAoMB3JpY2FyZG8xEjAQBgNVBAMMCW5lc3Rqcy1zcDAeFw0xOTA3MzExMTU3NTVaFw0yOTA3MjgxMTU3NTVaMEAxCzAJBgNVBAYTAmNhMQswCQYDVQQIDAJPTjEQMA4GA1UECgwHcmljYXJkbzESMBAGA1UEAwwJbmVzdGpzLXNwMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqYZAnxwaIUW9JspCwClPVAjjNnoUZMYN9MWmO6n1nCOxRn5g4wIbIyESP89pw5ntunOW/1rn5weGF3U+d0kEx2WgdvUzkajg6Z2fXm+I1fcmKK+/DUQLBjSPWDiDUX8ZE0JqexH61QYe4REoK9z05cR62ZhIP1jCPMRAR46UctQIDAQABo1AwTjAdBgNVHQ4EFgQUc5IDRIxDZAh8ejTy4l6mpEwvg8MwHwYDVR0jBBgwFoAUc5IDRIxDZAh8ejTy4l6mpEwvg8MwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQAuN4ouHg0u+I0ADpk7KhT90VqbzOLMCs0qcpHKO0gVZD4nIK4kC5JgytAL0hZUcUsAJGAak19rRi2ZZgF+c0Lf/GA+4sVSj4v5vhMWqwj4q6Xfo8cGG2ij6T7A1cFeRntFf0Ens8vvmKBZ7ce+Hs3zWQlmf+sF/qY2a6eILBLIxQ==
                    </ds:X509Certificate>
                </ds:X509Data>
            </ds:KeyInfo>
        </md:KeyDescriptor>

        <md:KeyDescriptor use="encryption">
            <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                <ds:X509Data>
                    <ds:X509Certificate>
                        MIICRjCCAa+gAwIBAgIBADANBgkqhkiG9w0BAQUFADBAMQswCQYDVQQGEwJjYTELMAkGA1UECAwCT04xEDAOBgNVBAoMB3JpY2FyZG8xEjAQBgNVBAMMCW5lc3Rqcy1zcDAeFw0xOTA3MzExMTU3NTVaFw0yOTA3MjgxMTU3NTVaMEAxCzAJBgNVBAYTAmNhMQswCQYDVQQIDAJPTjEQMA4GA1UECgwHcmljYXJkbzESMBAGA1UEAwwJbmVzdGpzLXNwMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqYZAnxwaIUW9JspCwClPVAjjNnoUZMYN9MWmO6n1nCOxRn5g4wIbIyESP89pw5ntunOW/1rn5weGF3U+d0kEx2WgdvUzkajg6Z2fXm+I1fcmKK+/DUQLBjSPWDiDUX8ZE0JqexH61QYe4REoK9z05cR62ZhIP1jCPMRAR46UctQIDAQABo1AwTjAdBgNVHQ4EFgQUc5IDRIxDZAh8ejTy4l6mpEwvg8MwHwYDVR0jBBgwFoAUc5IDRIxDZAh8ejTy4l6mpEwvg8MwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQAuN4ouHg0u+I0ADpk7KhT90VqbzOLMCs0qcpHKO0gVZD4nIK4kC5JgytAL0hZUcUsAJGAak19rRi2ZZgF+c0Lf/GA+4sVSj4v5vhMWqwj4q6Xfo8cGG2ij6T7A1cFeRntFf0Ens8vvmKBZ7ce+Hs3zWQlmf+sF/qY2a6eILBLIxQ==
                    </ds:X509Certificate>
                </ds:X509Data>
            </ds:KeyInfo>
            <md:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#aes128-cbc">
                <KeySize xmlns="http://www.w3.org/2001/04/xmlenc#">128</KeySize>
            </md:EncryptionMethod>
        </md:KeyDescriptor>

        <md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
                                Location="http://localhost:3000/auth/logout/callback"/>

        <md:NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</md:NameIDFormat>

        <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
                                     Location="http://localhost:3000/auth/login/callback" index="1"/>
    </md:SPSSODescriptor>

    <md:Organization>
        <md:OrganizationName xml:lang="en-US">ricardosaracino</md:OrganizationName>
        <md:OrganizationDisplayName xml:lang="en-US">ricardosaracino</md:OrganizationDisplayName>
        <md:OrganizationURL xml:lang="en-US">http://localhost</md:OrganizationURL>
    </md:Organization>

    <md:ContactPerson contactType="technical">
        <md:GivenName>Ricardo Saracino Contact</md:GivenName>
        <md:EmailAddress>contact@email.ca</md:EmailAddress>
    </md:ContactPerson>

    <md:ContactPerson contactType="support">
        <md:GivenName>Ricardo Saracino Support</md:GivenName>
        <md:EmailAddress>support@email.ca</md:EmailAddress>
    </md:ContactPerson>

</md:EntityDescriptor>
```

#### Passport

```typescript
export const samlPassportConf = {
    issuer: 'nestjs-sp-signed-0020', // match metadata entityID

    identifierFormat: 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',

    callbackUrl: 'http://localhost:3000/auth/login/callback',
    entryPoint: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/SSORedirect/metaAlias/idp',
    logoutUrl: 'http://idp5.canadacentral.cloudapp.azure.com/opensso/IDPSloRedirect/metaAlias/idp',

    privateCert: fs.readFileSync('cert/privatekey.pem', 'utf-8'),
    decryptionPvk: fs.readFileSync('cert/privatekey.pem', 'utf-8'),
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
