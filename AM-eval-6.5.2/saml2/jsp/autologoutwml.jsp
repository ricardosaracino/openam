<%--
  Copyright 2013-2017 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/vnd.wap.wml" language="java" %>

<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.1 //EN" "http://www.wapforum.org/DTD/wml_1.1.xml">
<wml>
    <card id="redirect" title="Log Out">
        <onenterforward>
            <go method="post" href="${DESTINATION_URL}">
                    ${MULTI_LOGOUT_REQUEST}
            </go>
        </onenterforward>
        <onenterbackward>
            <prev/>
        </onenterbackward>
        <onenterbackward>
            <p>
                logout initiated ...
            </p>
        </onenterbackward>
    </card>
</wml>
