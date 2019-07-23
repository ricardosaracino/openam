/*
 * JBoss, a division of Red Hat
 * Copyright 2011, Red Hat Middleware, LLC, and individual
 * contributors as indicated by the @authors tag. See the
 * copyright.txt in the distribution for a full listing of
 * individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

package org.gatein.sso.spnego;

import java.io.IOException;
import java.lang.reflect.Field;
import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.Session;
import org.apache.catalina.connector.Request;
import org.apache.catalina.deploy.LoginConfig;
import org.apache.catalina.realm.GenericPrincipal;
import org.gatein.sso.agent.filter.SPNEGOFilter;
import org.jboss.logging.Logger;
import org.jboss.security.negotiation.NegotiationAuthenticator;

/**
 * Modified version of {@link NegotiationAuthenticator} customized for portal purposes
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class GateInNegotiationAuthenticator extends NegotiationAuthenticator
{
    private static final Logger log = Logger.getLogger(GateInNegotiationAuthenticator.class);

    @Override
    public boolean authenticate(final Request request, final HttpServletResponse response, final LoginConfig config)
            throws IOException
    {
        // We need to set Content-type here, otherwise we may see plain-text login.jsp page
        response.setContentType("text/html; charset=UTF-8");

        boolean superResult = super.authenticate(request, response, config);

        // Workaround for SECURITY-719 (TODO: Remove once SECURITY-719 is properly handled in negotiation or jbossweb)
        if (superResult)
        {
            Principal principal = request.getPrincipal();

            if (principal instanceof GenericPrincipal)
            {
                GenericPrincipal genPrincipal = (GenericPrincipal) principal;
                String userPrincipalName = genPrincipal.getUserPrincipal().getName();

                // In latest negotiation+jbossas genPrincipal.getName() is the session token instead of real kerberos username
                if (!genPrincipal.getName().equals(userPrincipalName))
                {
                    if (log.isTraceEnabled())
                    {
                        log.trace("GenericPrincipal name: " + genPrincipal.getName() + " will be changed to name: " + userPrincipalName);
                    }
                    try
                    {
                        Field nameField = GenericPrincipal.class.getDeclaredField("name");
                        nameField.setAccessible(true);
                        nameField.set(genPrincipal, userPrincipalName);
                    }
                    catch (Exception ex)
                    {
                        log.error(ex.getMessage(), ex);
                    }
                }
            }
        }

        return superResult;
    }

    /**
     * Return the request URI (with the corresponding query string, if any)
     * from the saved request so that we can redirect to it. We need to override this method
     * because {@link  org.apache.catalina.authenticator.Constants#FORM_REQUEST_NOTE} can be null sometimes
     * (For example when request was send to /portal/login without displaying login.jsp page)
     *
     * @param session Our current session
     */
    @Override
    protected String savedRequestURL(Session session)
    {
       String savedURI = super.savedRequestURL(session);

       // Use url saved by SPNEGOFilter if saved request not found
       if (savedURI == null)
       {
          savedURI = (String)session.getSession().getAttribute(SPNEGOFilter.ATTR_INITIAL_URI);
       }

       // Using default context if nothing else found
       if (savedURI == null)
       {
          savedURI = "/" + session.getSession().getServletContext().getServletContextName();
       }

       return savedURI;
    }
}
