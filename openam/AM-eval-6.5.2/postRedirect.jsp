<%--
  Copyright 2015-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Map" %>

<html>
<head>
    <title>Mailman</title>
</head>
<body onload="document.forms[0].submit()">
<form method="post" action="${postURL}">

    <%
        Map postData = (Map) request.getAttribute("postData");
        for (Object o : postData.keySet()) {
            String k = (String) o;
            String v = (String) postData.get(k);
    %>
        <input type="hidden" name="<%=k%>" value="<%=v%>" />
    <%
        }
    %>
    <noscript>
        <input type="submit" value="Submit" />
    </noscript>
</form>
</body>
</html>
