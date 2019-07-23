<%@ tag pageEncoding="UTF-8" %>
<%@ tag import="com.sun.identity.console.XuiRedirectHelper" %>
<%--
  Copyright 2015-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ tag description="Replaces the current window location with the XUI page for the realm, or Home if XUI is disabled" %>
<%@ attribute name="xuiPath" type="java.lang.String" required="true" description="The path to the XUI page to redirect to" %>
<%@ attribute name="realm" type="java.lang.String" required="true" description="The realm to go back to, or empty string" %>

<script language="javascript">

    function redirectToXui() {
        var realm = ${realm};
        var authRealm = "?realm=/";
        var template = <%= XuiRedirectHelper.isXuiAdminConsoleEnabled() ? "'" + xuiPath + "'" : "'../task/Home'" %>;
        document.location.replace(template.replace("{realm}", realm).replace("{authRealm}", authRealm));
    }

</script>
