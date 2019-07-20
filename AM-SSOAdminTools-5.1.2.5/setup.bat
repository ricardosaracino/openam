@echo off
:
: DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
:  
: Copyright (c) 2007 Sun Microsystems Inc. All Rights Reserved
:  
: The contents of this file are subject to the terms
: of the Common Development and Distribution License
: (the License). You may not use this file except in
: compliance with the License.
:
: You can obtain a copy of the License at
: https://opensso.dev.java.net/public/CDDLv1.0.html or
: opensso/legal/CDDLv1.0.txt
: See the License for the specific language governing
: permission and limitations under the License.
:
: When distributing Covered Code, include this CDDL
: Header Notice in each file and include the License file
: at opensso/legal/CDDLv1.0.txt.
: If applicable, add the following below the CDDL Header,
: with the fields enclosed by brackets [] replaced by
: your own identifying information:
: "Portions Copyrighted [year] [name of copyright owner]"
:
: $Id: setup.bat,v 1.13 2009/01/28 05:34:46 ww203982 Exp $
:

: Portions Copyrighted 2013-2016 ForgeRock AS.
set TOOLS_HOME="."

if not "%JAVA_HOME%" == "" goto checkJavaHome
echo Please define JAVA_HOME environment variable before running this program
echo setup program will use the JVM defined in JAVA_HOME for all the CLI tools
goto exit

:checkJavaHome
if not exist "%JAVA_HOME%\bin\java.exe" goto invalidJavaHome
goto validJavaHome

:invalidJavaHome
echo The defined JAVA_HOME environment variable is not correct
echo setup program will use the JVM defined in JAVA_HOME for all the CLI tools
goto exit

:validJavaHome
SETLOCAL
CALL %JAVA_HOME%\bin\java.exe -version 2>&1|more > java_version.txt
SET /P java_version=< java_version.txt
DEL java_version.txt
CALL :GET_VERSION_NUM %java_version:"1.= %
CALL :GET_MID_VERSION_NUM %java_version:.= %
IF "%java_version%" == "0" goto invalidJavaVersion
IF "%java_version%" == "1" goto invalidJavaVersion
IF "%java_version%" == "2" goto invalidJavaVersion
IF "%java_version%" == "3" goto invalidJavaVersion
goto runSetup

:invalidJavaVersion
echo This program is designed to work with 1.4 or newer JRE.
goto exit

:GET_VERSION_NUM
SET java_version=%3
goto exit

:GET_MID_VERSION_NUM
SET java_version=%1
goto exit

:runSetup
IF "%1" == "--acceptLicense" SET accept_license=--acceptLicense
IF "%1" == "-h" SET help_print=yes
IF "%1" == "--help" SET help_print=yes
IF "%1" == "-l" SET path_log=%~2
IF "%1" == "--log" SET path_log=%~2
IF "%1" == "-d" SET path_debug=%~2
IF "%1" == "--debug" SET path_debug=%~2
IF "%1" == "-p" SET path_AMConfig=%~2
IF "%1" == "--path" SET path_AMConfig=%~2
IF "%2" == "-l" SET path_log=%~3
IF "%2" == "--log" SET path_log=%~3
IF "%2" == "-d" SET path_debug=%~3
IF "%2" == "--debug" SET path_debug=%~3
IF "%2" == "-p" SET path_AMConfig=%~3
IF "%2" == "--path" SET path_AMConfig=%~3
IF "%3" == "--acceptLicense" SET accept_license=--acceptLicense
IF "%3" == "-l" SET path_log=%~4
IF "%3" == "--log" SET path_log=%~4
IF "%3" == "-d" SET path_debug=%~4
IF "%3" == "--debug" SET path_debug=%~4
IF "%3" == "-p" SET path_AMConfig=%~4
IF "%3" == "--path" SET path_AMConfig=%~4
IF "%4" == "-l" SET path_log=%~5
IF "%4" == "--log" SET path_log=%~5
IF "%4" == "-d" SET path_debug=%~5
IF "%4" == "--debug" SET path_debug=%~5
IF "%4" == "-p" SET path_AMConfig=%~5
IF "%4" == "--path" SET path_AMConfig=%~5
IF "%5" == "--acceptLicense" SET accept_license=--acceptLicense
IF "%5" == "-l" SET path_log=%~6
IF "%5" == "--log" SET path_log=%~6
IF "%5" == "-d" SET path_debug=%~6
IF "%5" == "--debug" SET path_debug=%~6
IF "%5" == "-p" SET path_AMConfig=%~6
IF "%5" == "--path" SET path_AMConfig=%~6

set CLASSPATH="@CONFIG_DIR@"
set CLASSPATH="%CLASSPATH%;%TOOLS_HOME%\lib\openam-entitlements-14.1.2.5.jar;%TOOLS_HOME%\lib\openam-license-core-14.1.2.5.jar;%TOOLS_HOME%\lib\opendj-core-4.0.0.jar;%TOOLS_HOME%\lib\guice-assistedinject-3.0.jar;%TOOLS_HOME%\lib\slf4j-nop-1.7.21.jar;%TOOLS_HOME%\lib\jackson-databind-2.9.9.jar;%TOOLS_HOME%\lib\jaxb-api-2.3.1.jar;%TOOLS_HOME%\lib\org.apache.servicemix.bundles.javax-inject-1_2.jar;%TOOLS_HOME%\lib\forgerock-guava-collect-18.0.4.jar;%TOOLS_HOME%\lib\commons-lang-2.6.jar;%TOOLS_HOME%\lib\opendj-server-legacy-4.0.0.jar;%TOOLS_HOME%\lib\i18n-core-1.4.2.jar;%TOOLS_HOME%\lib\openam-core-14.1.2.5.jar;%TOOLS_HOME%\lib\openam-dtd-schema-14.1.2.5.jar;%TOOLS_HOME%\lib\jackson-core-2.9.9.jar;%TOOLS_HOME%\lib\opendj-server-4.0.0.jar;%TOOLS_HOME%\lib\joda-time-2.7.jar;%TOOLS_HOME%\lib\jackson-annotations-2.9.9.jar;%TOOLS_HOME%\lib\guice-3.0-no_aop.jar;%TOOLS_HOME%\lib\slf4j-api-1.7.21.jar;%TOOLS_HOME%\lib\opendj-config-4.0.0.jar;%TOOLS_HOME%\lib\openam-license-manager-cli-14.1.2.5.jar;%TOOLS_HOME%\lib\commons-collections-3.2.2.jar;%TOOLS_HOME%\lib\openam-audit-context-14.1.2.5.jar;%TOOLS_HOME%\lib\opendj-cli-4.0.0.jar;%TOOLS_HOME%\lib\openam-audit-configuration-14.1.2.5.jar;%TOOLS_HOME%\lib\forgerock-util-21.0.10.jar;%TOOLS_HOME%\lib\forgerock-guice-core-2.0.4.jar;%TOOLS_HOME%\lib\grizzly-framework-2.3.28.jar;%TOOLS_HOME%\lib\forgerock-audit-core-21.0.10.jar;%TOOLS_HOME%\lib\xmlsec-1.5.6.jar;%TOOLS_HOME%\lib\chf-http-core-21.0.10.jar;%TOOLS_HOME%\lib\openam-shared-14.1.2.5.jar;%TOOLS_HOME%\lib\opendj-grizzly-4.0.0.jar;%TOOLS_HOME%\lib\openam-ldap-utils-14.1.2.5.jar;%TOOLS_HOME%\lib\i18n-slf4j-1.4.2.jar;%TOOLS_HOME%\lib\openam-keystore-14.1.2.5.jar;%TOOLS_HOME%\lib\json-20090211.jar;%TOOLS_HOME%\lib\forgerock-guava-base-18.0.4.jar"
set CLASSPATH="%CLASSPATH%;%TOOLS_HOME%\resources"

"%JAVA_HOME%/bin/java.exe" -D"load.config=yes" -D"help.print=%help_print%" -D"path.AMConfig=%path_AMConfig%" -D"path.log=%path_log%" -D"path.debug=%path_debug%" -cp "%CLASSPATH%" com.sun.identity.tools.bundles.Main %accept_license%

ENDLOCAL

:exit
exit /b
