<%--
  Copyright 2010-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>

<%@ page import="com.sun.identity.shared.encode.Base64" %>
<%@ page import="com.sun.identity.saml2.common.SAML2Constants" %>
<%@ page import="com.sun.identity.saml2.common.SAML2Utils" %>
<%@ page import="org.owasp.esapi.ESAPI"%>
<%@ page import="org.apache.commons.lang.StringUtils"%>
<%@ page import="java.util.List" %>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>IdP Selection</title>
    </head>
    <body>
        <%
            List idpList = null;
            String errorURL = "idpfinderError.html";
            String samlIdP = "";
            String relayState = "";
            String idpListSt = "";
            List<String> requestedAuthnContext;

            HttpSession hts = request.getSession();
            if (hts == null) {
        %>
        <jsp:forward page="<%= errorURL %>" />

        <%               
            }
            String [] lista = null;
            idpListSt = (String) hts.getAttribute("_IDPLIST_");
            if (idpListSt != null && !idpListSt.isEmpty()) {
               lista =  idpListSt.split(" ");
            } else {
        %>
                <jsp:forward page="<%= errorURL %>" />
        <%
            }

            relayState = (String) hts.getAttribute("_RELAYSTATE_");
            String metaAlias = (String) hts.getAttribute("_IDPMETAALIAS_");
            if (StringUtils.isEmpty(relayState) || StringUtils.isEmpty(metaAlias) ||
                    !SAML2Utils.isRelayStateURLValid(metaAlias, relayState, SAML2Constants.IDP_ROLE)) {
        %>
            <jsp:forward page="<%= errorURL %>" />
        <%
            }

            requestedAuthnContext = (List<String>) hts.getAttribute("_REQAUTHNCONTEXT_");
            if (requestedAuthnContext != null && requestedAuthnContext.isEmpty()) {
        %>
            <jsp:forward page="<%= errorURL %>" />
        <%
            }

            String spRequester = (String) hts.getAttribute("_SPREQUESTER_");
            if (spRequester == null) response.sendRedirect(errorURL);
            if (spRequester.isEmpty()) response.sendRedirect(errorURL);

            samlIdP = request.getParameter("_saml_idp");
            if (!ESAPI.validator().isValidInput("HTTP Parameter Value: " + samlIdP, samlIdP,
                "HTTPParameterValue", 2000, true)){
                samlIdP = null;
            }

            if (samlIdP != null && !samlIdP.isEmpty()) {
                hts.removeAttribute("_IDPLIST_");
                hts.removeAttribute("_RELAYSTATE_");
                hts.removeAttribute("_SPREQUESTER_");
                hts.removeAttribute("_REQAUTHNCONTEXT_");

                if (relayState.indexOf("?") == -1) {
                    relayState += "?";
                } else {
                    relayState += "&";
                }
                response.sendRedirect(relayState + "_saml_idp=" + samlIdP);
            }

        %>
        <h2>Welcome to the Federation Broker</h2>
        <p>You are here because you initiated a request in the Service Provider <b><%= spRequester %></b> and
            <br>You asked for the <%= requestedAuthnContext == null ? "<b>default</b> " : "" %>Assurance level <b><%= requestedAuthnContext != null ? StringUtils.join(requestedAuthnContext, " ") : "" %></b>:
        </p>
        <p>Please select your preferred IdP:</p>
        <form action="" method="POST">
                   <%
                     if (lista != null && lista.length > 0) {
                        for(String  preferredIDP : lista) {
                          String preferredIDPB64 = Base64.encode(preferredIDP.getBytes());
                   %>
                   <input type="radio" name="_saml_idp" value="<%= preferredIDPB64 %>"> <%= preferredIDP %>
                   <br>
                   <%
                        }
                     }
                   %>

                   <p><input type="submit" value="Submit"></p>
        </form>
    </body>
</html>
