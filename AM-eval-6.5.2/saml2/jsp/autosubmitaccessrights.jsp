<%--
  Copyright 2013-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Access rights validated</title>
</head>
<body onload="document.forms[0].submit()">
<form method="post" action="${TARGET_URL}">

    <input type="hidden" name="${SAML_MESSAGE_NAME}" value="${SAML_MESSAGE_VALUE}" />
    <%
    String relayStateValue = (String)request.getAttribute("RELAY_STATE_VALUE");
    if (relayStateValue != null && !relayStateValue.isEmpty()) {
    %>
        <input type="hidden" name="${RELAY_STATE_NAME}" value="${RELAY_STATE_VALUE}" />
    <%
    }
    %>
    <noscript>
        <input type="submit" value="${SAML_POST_KEY}" />
    </noscript>
</form>
</body>
</html>
