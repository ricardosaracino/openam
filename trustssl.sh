#!/usr/local/bin/bash
  #
  # Retrieves the SSL certificate from a server and adds it to the
  # local trusted certificate store
  #

  # Check for the right user
  if [ "$USER" '!=' "testmgr" ] ; then
     echo "This script must be run as testmgr"
     exit
  fi

  if [ $# -ne 1 ] ; then
     echo "Usage:"
     echo $0 "hostname:port"
     echo "eg." $0 "myrp.test.gc.ca:443"
  fi

  # Delete any old cert with the same name
  ${JAVA_HOME}/bin/keytool -delete -alias "$1" \
                                -keystore  ${HOME}/SSL/jssecacerts \
                                -storepass changeit -noprompt 2>&1 >/dev/null

  # Retrieve the certificate and add it to the local keystore
  echo Q \
     | openssl s_client -connect $1 2>/dev/null \
     | sed -n "/-----BEGIN CERTIFICATE-----/,/-----END CERTIFICATE-----/ p " \
     | ${JAVA_HOME}/bin/keytool -importcert -noprompt -alias "$1" \
                                -keystore ${HOME}/SSL/jssecacerts \
                                -storepass changeit

