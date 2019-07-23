<%--
  ~ Copyright 2016-2017 ForgeRock AS. All Rights Reserved
  ~
  ~ Use of this code requires a commercial software license with ForgeRock AS.
  ~ or with one of its affiliates. All use shall be exclusively subject
  ~ to such license between the licensee and ForgeRock AS.
  --%><%@ page contentType="application/soap+xml;charset=UTF-8" language="java" session="false"
             import="org.forgerock.openam.utils.StringUtils"
%><s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing">
    <s:Header>
        <a:Action s:mustUnderstand="1">http://schemas.xmlsoap.org/ws/2004/09/transfer/GetResponse</a:Action>
        <% if (StringUtils.isNotEmpty((String) request.getAttribute("inResponseTo"))) { %>
            <a:RelatesTo>${inResponseTo}</a:RelatesTo>
        <% } %>
    </s:Header>
    <s:Body>
        <Metadata xmlns="http://schemas.xmlsoap.org/ws/2004/09/mex" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:wsx="http://schemas.xmlsoap.org/ws/2004/09/mex">
            <wsx:MetadataSection Dialect="http://schemas.xmlsoap.org/wsdl/"
                                 Identifier="http://forgerock.org/ws-fed/securitytokenservice"
                                 xmlns="">
                <jsp:include page="wsdl.jsp" />
            </wsx:MetadataSection>
        </Metadata>
    </s:Body>
</s:Envelope>