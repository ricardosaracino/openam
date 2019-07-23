<%--
  Copyright 2013-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<body onload="document.forms[0].submit()">
<form method="post" action="${ERROR_URL}">
    <input type="hidden" name="${ERROR_CODE_NAME}" value="${ERROR_CODE}" />
    <input type="hidden" name="${ERROR_MESSAGE_NAME}" value="${ERROR_MESSAGE}" />
    <input type="hidden" name="${HTTP_STATUS_CODE_NAME}" value="${HTTP_STATUS_CODE}" />
    <noscript>
        <input type="submit" value="${SAML_ERROR_KEY}" />
    </noscript>
</form>
</body>
</html>
