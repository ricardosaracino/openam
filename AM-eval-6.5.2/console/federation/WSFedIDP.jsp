<%--
   DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
  
   Copyright (c) 2007 Sun Microsystems Inc. All Rights Reserved
  
   The contents of this file are subject to the terms
   of the Common Development and Distribution License
   (the License). You may not use this file except in
   compliance with the License.

   You can obtain a copy of the License at
   https://opensso.dev.java.net/public/CDDLv1.0.html or
   opensso/legal/CDDLv1.0.txt
   See the License for the specific language governing
   permission and limitations under the License.

   When distributing Covered Code, include this CDDL
   Header Notice in each file and include the License file
   at opensso/legal/CDDLv1.0.txt.
   If applicable, add the following below the CDDL Header,
   with the fields enclosed by brackets [] replaced by
   your own identifying information:
   "Portions Copyrighted [year] [name of copyright owner]"

   $Id: WSFedIDP.jsp,v 1.4 2008/08/30 01:20:42 babysunil Exp $

   Portions Copyrighted 2016-2018 ForgeRock AS.
--%>

<%@ page info="WSFedIDP" language="java" import="com.sun.identity.console.federation.model.WSFedPropertiesModel" %>
<%@taglib uri="/WEB-INF/jato.tld" prefix="jato" %>
<%@taglib uri="/WEB-INF/cc.tld" prefix="cc" %>
<jato:useViewBean
    className="com.sun.identity.console.federation.WSFedIDPViewBean"
    fireChildDisplayEvents="true" >

<cc:i18nbundle baseName="amConsole" id="amConsole"
    locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean)
        .getUserLocale()%>"/>

<cc:header name="hdrCommon" 
    pageTitle="webconsole.title" 
    bundleID="amConsole" 
    copyrightYear="2004" 
    onLoad="javascript:disableFields()"
    fireDisplayEvents="true">

<script language="javascript" src="../console/js/am.js"></script>

<cc:form name="WSFedIDP" method="post" defaultCommandChild="/button1">

<%-- HEADER --%>
<script language="javascript">
    function confirmLogout() {
        return confirm("<cc:text name="txtLogout"
            defaultValue="masthead.logoutMessage" bundleID="amConsole"/>");
    }

    function disableFields() {
        var formElement = document.forms["WSFedIDP"];
        var isHosted = <%= viewBean.getDisplayFieldBooleanValue(WSFedPropertiesModel.IS_HOSTED) %>;

        if (isHosted) {
            if (formElement.elements['WSFedIDP.nameIdFormat'].value == "http://schemas.xmlsoap.org/claims/UPN") {
                if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == true) {
                    formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
                    formElement.elements['WSFedIDP.upnDomain'].disabled = true;
                } else if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == false) {
                    formElement.elements['WSFedIDP.domainAttribute'].disabled = false;
                    formElement.elements['WSFedIDP.upnDomain'].disabled = false;
                }
            } else if (formElement.elements['WSFedIDP.nameIdFormat'].value == "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress") {
                formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = true;
                formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
                formElement.elements['WSFedIDP.upnDomain'].disabled = true;
                formElement.elements['WSFedIDP.nameIncludesDomain'].checked = false;
            } else if (formElement.elements['WSFedIDP.nameIdFormat'].value == "http://schemas.xmlsoap.org/claims/CommonName") {
                formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = true;
                formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
                formElement.elements['WSFedIDP.upnDomain'].disabled = true;
                formElement.elements['WSFedIDP.nameIncludesDomain'].checked = false;
            } else {
                formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = false;
                formElement.elements['WSFedIDP.domainAttribute'].disabled = false;
                formElement.elements['WSFedIDP.upnDomain'].disabled = false;
            }
        } else {
            if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == true) {
                formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
            } else if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == false) {
                formElement.elements['WSFedIDP.domainAttribute'].disabled = false;
            }
        }
    }

    function SelectOne(nameIdFormat) {
        var formElement = document.forms["WSFedIDP"];
        if (nameIdFormat.value == "http://schemas.xmlsoap.org/claims/UPN") {
            if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == true) {
                formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
                formElement.elements['WSFedIDP.upnDomain'].disabled = true;
            } else if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == false) {
                formElement.elements['WSFedIDP.domainAttribute'].disabled = false;
                formElement.elements['WSFedIDP.upnDomain'].disabled = false;
                formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = false;
            }
            formElement.elements['WSFedIDP.nameIdAttribute'].value = 'uid';

        } else if (nameIdFormat.value == "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress") {
            formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = true;
            formElement.elements['WSFedIDP.nameIncludesDomain'].checked = false;
            formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
            formElement.elements['WSFedIDP.upnDomain'].disabled = true;
            formElement.elements['WSFedIDP.nameIdAttribute'].value = 'mail';
        } else if (nameIdFormat.value == "http://schemas.xmlsoap.org/claims/CommonName") {
            formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = true;
            formElement.elements['WSFedIDP.nameIncludesDomain'].checked = false;
            formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
            formElement.elements['WSFedIDP.upnDomain'].disabled = true;
            formElement.elements['WSFedIDP.nameIdAttribute'].value = 'cn';
        } else {
            formElement.elements['WSFedIDP.nameIncludesDomain'].disabled = false;
            formElement.elements['WSFedIDP.domainAttribute'].disabled = false;
            formElement.elements['WSFedIDP.upnDomain'].disabled = false;
        }
    }
    
  function disableSome(chekbox) {
    var formElement = document.forms["WSFedIDP"];
       if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == true) {
           formElement.elements['WSFedIDP.domainAttribute'].disabled = true;
              formElement.elements['WSFedIDP.upnDomain'].disabled = true;
          } else if (formElement.elements['WSFedIDP.nameIncludesDomain'].checked == false) {
            formElement.elements['WSFedIDP.domainAttribute'].disabled = false;
              formElement.elements['WSFedIDP.upnDomain'].disabled = false;
          }      
  }
   
    
</script>
<cc:primarymasthead name="mhCommon" bundleID="amConsole"
    logoutOnClick="return confirmLogout();" 
        locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean)
            .getUserLocale()%>"/>

<cc:tabs name="tabCommon" bundleID="amConsole" />

<table border="0" cellpadding="10" cellspacing="0" width="100%">
    <tr>
        <td>
            <cc:alertinline name="ialertCommon" bundleID="amConsole" />
        </td>
    </tr>
</table>

<%-- PAGE CONTENT --%>
<cc:pagetitle name="pgtitle" 
    bundleID="amConsole" 
    pageTitleText="page.title.user.properties" 
    showPageTitleSeparator="true" 
    viewMenuLabel="" 
    pageTitleHelpMessage="" 
    showPageButtonsTop="true" 
    showPageButtonsBottom="true" >

<cc:propertysheet 
    name="propertyAttributes" 
    bundleID="amConsole" showJumpLinks="true" />
    
</cc:pagetitle>

</cc:form>
</cc:header>
</jato:useViewBean>                                 
