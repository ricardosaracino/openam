<%--
   DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
  
   Copyright (c) 2005 Sun Microsystems Inc. All Rights Reserved
  
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
                                                                                
   $Id: new_org.jsp,v 1.6 2008/08/15 01:05:29 veiming Exp $
                                                                                
   Portions Copyrighted 2012-2018 ForgeRock AS.
--%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <%@page info="New Org Confirmation Page" language="java"%>
    <%@taglib uri="/WEB-INF/jato.tld" prefix="jato"%>
    <%@taglib uri="/WEB-INF/auth.tld" prefix="auth"%>
    <jato:useViewBean className="com.sun.identity.authentication.UI.LoginViewBean">
        <%@ page contentType="text/html" %>
        <%@ page import = "org.owasp.esapi.ESAPI" %>
        <head>
            <title><jato:text name="htmlTitle_NewOrg" /></title>
            <%
            String ServiceURI = (String) viewBean.getDisplayFieldValue(viewBean.SERVICE_URI);
            String encoded = "false";
            String gotoURL = (String) viewBean.getValidatedInputURL(
                request.getParameter("goto"), request.getParameter("encoded"), request);
            String encodedQueryParams = (String) viewBean.getEncodedQueryParams(request);
            if ((gotoURL != null) && (gotoURL.length() != 0)) {
                encoded = "true";
            }
            %>
            <link href="<%= ServiceURI%>/css/new_style.css" rel="stylesheet" type="text/css" />
            <!--[if IE 9]> <link href="<%= ServiceURI %>/css/ie9.css" rel="stylesheet" type="text/css"> <![endif]-->
            <!--[if lte IE 7]> <link href="<%= ServiceURI %>/css/ie7.css" rel="stylesheet" type="text/css"> <![endif]-->
            <script language="JavaScript" type="text/javascript">
                <!--
                function LoginSubmit(value) {
                    var frm = document.forms[0];
                    frm.elements['IDButton'].value = value;
                    frm.submit();
                }
                -->
            </script>
        </head>
        <body>
            <div class="container_12">
                <div class="grid_4 suffix_8">
                    <a class="logo" href="<%= ServiceURI%>"></a>
                </div>
                <div class="box box-spaced clear-float">
                    <div class="grid_3">
                        <div class="product-logo"></div>
                    </div>
                    <div class="grid_9">
                        <div class="box-content clear-float">
                            <div class="message">
                                <span class="icon info"></span>
                                <h3><auth:resBundle bundleName="amAuthUI" resourceKey="newOrg.agree" /></h3>
                            </div>
                            <auth:form name="Login" method="post" defaultCommandChild="DefaultLoginURL" >
                                <fieldset>
                                    <jato:content name="hasButton">
                                        <div class="row">
                                            <input name="IDButton" type="hidden"/>
                                            <jato:tiledView name="tiledButtons" type="com.sun.identity.authentication.UI.ButtonTiledView">
                                                <input name="Login.Submit" type="button" class="<jato:text name="txtClass" />" onclick="LoginSubmit('<jato:text name="txtButton" />'); return false;" value="<jato:text name="txtButton" />" />
                                            </jato:tiledView>
                                        </div>
                                    </jato:content>
                                    <input type="hidden" name="SunQueryParamsString" value="<%= encodedQueryParams %>" />
                                    <input type="hidden" name="goto" value="<%= ESAPI.encoder().encodeForHTMLAttribute(gotoURL) %>" />
                                    <input type="hidden" name="encoded" value="<%= encoded %>" />
                                    <input type="hidden" name="new_org" value="true" />
                                    <input type="hidden" name="frmToken" value="<jato:text name="frmToken" />" />
                                </fieldset>
                            </auth:form>
                        </div>
                    </div>
                </div>
                <div class="footer alt-color">
                    <div class="grid_6 suffix_3">
                        <p><auth:resBundle bundleName="amAuthUI" resourceKey="copyright.notice" /></p>
                    </div>
                </div>
            </div>
        </body>
    </jato:useViewBean>
</html>
