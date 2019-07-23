<%--
  Copyright 2013-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Logout in progress</title>
</head>
<body onload="document.forms[0].submit()">
<p>
    Logout in progress ...
    If you have JavaScript disabled, please press the Continue button.
    Otherwise, please wait.
</p>

<form method="post" action="${DESTINATION_URL}">
    <p>
        ${MULTI_LOGOUT_REQUEST}
    </p>
    <br/>
    <input type="submit" name="Continue" value="Continue logout"/>
</form>
</body>
</html>
