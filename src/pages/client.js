import React from 'react'
import Login from './components/Client/Login'
import Logout from './components/Client/Logout'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Client/Dashboard'
import Projects from './components/Client/Projects'
import Settings from './components/Client/Settings'
import { Router } from '@reach/router'
import { Auth0Provider } from "@auth0/auth0-react"
import { navigate } from 'gatsby'

const Client = () => {

    if (window.location.pathname === '/client' || window.location.pathname === '/client/') {
        navigate('/client/login')
        return null
    }

    return (
        <Auth0Provider
            domain={process.env.GATSBY_OAUTH_DOMAIN}
            clientId={process.env.GATSBY_OAUTH_CLIENT_ID}
            redirectUri={window.location.origin + '/client/dashboard'}
        >
            <Router>
                <Login path="/client/login" />
                <PrivateRoute path="/client/dashboard" component={Dashboard} />
                <PrivateRoute path="/client/projects" component={Projects} />
                <PrivateRoute path="/client/settings" component={Settings} />
                <PrivateRoute path="/client/logout" component={Logout} />
            </Router>
        </Auth0Provider>
    )
}

export default Client