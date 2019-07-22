<%--
  Copyright 2011-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page language="java"
import="com.sun.identity.federation.common.IFSConstants,
com.sun.identity.federation.common.FSUtils"
isELIgnored="false"
%>
<html>
 <body onload="document.Response.submit()">
  <form name="Response" method="post" action="${destURL}">
   <input type="hidden" name="<%= IFSConstants.POST_AUTHN_RESPONSE_PARAM %>" value="${authnResponse}"/>
   <noscript>
    <center>
     <input type="submit" value="<%= FSUtils.bundle.getString("laresPostCustomKey") %>"/>
    </center>
   </noscript>
  </form>
 </body>
</html>
