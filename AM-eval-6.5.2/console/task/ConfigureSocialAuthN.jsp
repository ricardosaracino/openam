<%--
  Copyright 2014-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>

<%@page info="ConfigureSocialAuthN" contentType="text/html;charset=UTF-8" language="java" %>
<%@page import="org.owasp.esapi.ESAPI" %>
<%@taglib uri="/WEB-INF/jato.tld" prefix="jato" %>
<%@taglib uri="/WEB-INF/cc.tld" prefix="cc" %>
<%@taglib tagdir="/WEB-INF/tags" prefix="console"%>
<%
    request.setCharacterEncoding("UTF-8");
%>

<jato:useViewBean
    className="com.sun.identity.console.task.ConfigureSocialAuthNViewBean"
    fireChildDisplayEvents="true" >

    <cc:i18nbundle baseName="amConsole" id="amConsole"
                   locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean).getUserLocale()%>"/>

    <cc:header name="hdrCommon" pageTitle="webconsole.title" bundleID="amConsole" copyrightYear="2014" fireDisplayEvents="true">

        <link rel="stylesheet" type="text/css" href="../console/css/openam.css" />
        <script language="javascript" src="../console/js/am.js"></script>
        <script language="javascript" src="../com_sun_web_ui/js/dynamic.js"></script>

        <div id="main" style="position: absolute; margin: 0; border: none; padding: 0; width: 100%; height: 101%;">
            <cc:form name="ConfigureSocialAuthN" method="post" defaultCommandChild="/btnSearch">
                <jato:hidden name="szCache" />

                <%-- HEADER --%>
                <script language="javascript">
                    function confirmLogout() {
                        return confirm("<cc:text name="txtLogout" defaultValue="masthead.logoutMessage" bundleID="amConsole"/>");
                    }
                </script>
                <cc:primarymasthead name="mhCommon" bundleID="amConsole"  logoutOnClick="return confirmLogout();"
                                    locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean).getUserLocale()%>"/>

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
                              pageTitleText="page.title.configure.social.authentication"
                              showPageTitleSeparator="false"
                              viewMenuLabel=""
                              pageTitleHelpMessage="page.desc.configure.social.authentication"
                              showPageButtonsTop="true"
                              showPageButtonsBottom="false" >

                    <cc:propertysheet
                        name="propertyAttributes"
                        bundleID="amConsole"
                        showJumpLinks="false" />
                </cc:pagetitle>

            </cc:form>
        </div>
        <div id="dlg" class="dvs"></div>
        <script type="text/javascript">
            <!--
            var ajaxObj = getXmlHttpRequestObject();
            var userLocale = "<%= viewBean.getUserLocale().toString() %>";
            var msgConfiguring = "<p><img src=\"../console/images/processing.gif\" width=\"66\" height\"66\"/></p><cc:text name="txtConfiguring" defaultValue="social.configuration.waiting" bundleID="amConsole" escape="false" />";
            var msgConfigured = "<p>&nbsp;</p><input name=\"btnOK\" type=\"submit\" class=\"Btn1\" value=\"<cc:text name="txtOKBtn" defaultValue="ajax.ok.button" bundleID="amConsole" />\" onClick=\"redirectToXui();return false;\" /></div></p>";
            var closeBtn = "<p>&nbsp;</p><p><div class=\"TtlBtnDiv\"><input name=\"btnClose\" type=\"submit\" class=\"Btn1\" value=\"<cc:text name="txtCloseBtn" defaultValue="ajax.close.button" bundleID="amConsole" />\" onClick=\"focusMain();return false;\" /></div></p>";

            var frm = document.forms['ConfigureSocialAuthN'];
            var btn1 = frm.elements['ConfigureSocialAuthN.button1'];
            btn1.onclick = submitPage;
            var btn2 = frm.elements['ConfigureSocialAuthN.button2'];
            btn2.onclick = cancelOp;
            <%
                String type = request.getParameter("type");
                if (!ESAPI.validator().isValidInput("Social AuthN Type", type, "HTTPParameterValue", 2000, true)) {
                    type = null;
                }
                if (type != null) {
                    out.println("var type = \"" + ESAPI.encoder().encodeForHTML(type) + "\";");
                } else {
                    out.println("var type = null;");
                }

                String provider = request.getParameter("provider");
                if (!ESAPI.validator().isValidInput("Social AuthN Provider", provider, "HTTPParameterValue", 2000, true)) {
                    provider = null;
                }
                if (provider != null) {
                    out.println("var provider = \"" + ESAPI.encoder().encodeForHTML(provider) + "\";");
                } else {
                    out.println("var provider = null;");
                }
            %>

            function submitPage() {
                fade();
                document.getElementById('dlg').innerHTML = '<center>' + msgConfiguring + '</center>';
                var url = "../console/ajax/AjaxProxy.jsp";
                var params = 'locale=' + userLocale + '&class=com.sun.identity.workflow.ConfigureSocialAuthN' + getData();
                ajaxPost(ajaxObj, url, params, configured);
                return false;
            }

            function cancelOp() {
                redirectToXui();
                return false;
            }

            function getData() {
                var realm = frm.elements['ConfigureSocialAuthN.tfRealm'].value;
                var clientId = frm.elements['ConfigureSocialAuthN.tfClientId'].value;
                var clientSecret = frm.elements['ConfigureSocialAuthN.tfClientSecret'].value;
                var clientSecretConfirm = frm.elements['ConfigureSocialAuthN.tfConfirmSecret'].value;
                var redirectUrl = frm.elements['ConfigureSocialAuthN.tfRedirectUrl'].value;

                var params = "&realm=" + escapeEx(realm)
                    + "&type=" + escapeEx(type)
                    + "&provider=" + escapeEx(provider)
                    + "&clientId=" + escapeEx(clientId)
                    + "&clientSecret=" + escapeEx(clientSecret)
                    + "&clientSecretConfirm=" + escapeEx(clientSecretConfirm)
                    + "&redirectUrl=" + escapeEx(redirectUrl);

                if (frm.elements['ConfigureSocialAuthN.tfDiscoveryUrl']) {
                    var discoveryUrl = frm.elements['ConfigureSocialAuthN.tfDiscoveryUrl'].value;
                    var imageUrl = frm.elements['ConfigureSocialAuthN.tfImageUrl'].value;
                    var providerName = frm.elements['ConfigureSocialAuthN.tfProviderName'].value;

                    params += "&discoveryUrl=" + escapeEx(discoveryUrl)
                            + "&imageUrl=" + escapeEx(imageUrl)
                            + "&providerName=" + escapeEx(providerName);
                }

                return params;
            }

            function configured() {
                if (ajaxObj.readyState == 4) {
                    var result = hexToString(ajaxObj.responseText);
                    var status = result.substring(0, result.indexOf('|'));
                    var result = result.substring(result.indexOf('|') + 1);
                    var msg = '<center><p>' + result + '</p></center>';
                    if (status == 0) {
                        msg = msg + '<center>' + msgConfigured + '</center>';
                    } else {
                        msg = msg + '<center>' + closeBtn + '</center>';
                    }
                    document.getElementById('dlg').innerHTML = msg;
                }
            }

            -->
        </script>
        <%-- END CONTENT --%>
        <console:redirectToXui realm="encodeURIComponent(frm.elements['ConfigureSocialAuthN.tfRealm'].value)"
                               xuiPath="../XUI{authRealm}#realms/{realm}/dashboard"/>

    </cc:header>
</jato:useViewBean>
