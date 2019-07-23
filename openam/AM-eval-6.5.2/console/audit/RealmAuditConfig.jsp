<%--
  Copyright 2015-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>

<%@ page info="RealmAuditConfig" language="java" %>
<%@taglib uri="/WEB-INF/jato.tld" prefix="jato" %>
<%@taglib uri="/WEB-INF/cc.tld" prefix="cc" %>
<jato:useViewBean
        className="com.sun.identity.console.audit.RealmAuditConfigViewBean"
        fireChildDisplayEvents="true">

    <cc:i18nbundle baseName="amConsole" id="amConsole"
                   locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean).getUserLocale()%>"/>
    <cc:i18nbundle baseName="audit" id="audit"
                   locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean).getUserLocale()%>"/>

    <cc:header name="hdrCommon"
               pageTitle="webconsole.title"
               bundleID="amConsole"
               copyrightYear="2015"
               fireDisplayEvents="true">

        <script language="javascript" src="../console/js/am.js"></script>

        <cc:form name="RealmAuditConfig" method="post" defaultCommandChild="/button1">
            <jato:hidden name="szCache"/>
            <script language="javascript">
                function confirmLogout() {
                    return confirm("<cc:text name="txtLogout" defaultValue="masthead.logoutMessage" bundleID="amConsole"/>");
                }
            </script>
            <cc:primarymasthead name="mhCommon" bundleID="amConsole" logoutOnClick="return confirmLogout();"
                                locale="<%=((com.sun.identity.console.base.AMViewBeanBase)viewBean).getUserLocale()%>"/>
            <cc:breadcrumbs name="breadCrumb" bundleID="amConsole"/>

            <table border="0" cellpadding="10" cellspacing="0" width="100%">
                <tr>
                    <td>
                        <cc:alertinline name="ialertCommon" bundleID="audit"/>
                    </td>
                </tr>
            </table>

            <%-- PAGE CONTENT --%>
            <cc:pagetitle name="pgtitle" bundleID="amConsole" pageTitleText="" showPageTitleSeparator="true"
                          viewMenuLabel="" pageTitleHelpMessage="" showPageButtonsTop="true"
                          showPageButtonsBottom="true">
                <jato:content name="property">
                    <cc:propertysheet name="propertyAttributes" showJumpLinks="true" bundleID="audit"/>
                </jato:content>
            </cc:pagetitle>

        </cc:form>

    </cc:header>
</jato:useViewBean>
