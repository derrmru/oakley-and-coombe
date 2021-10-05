import React from 'react'
import { navigate } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRoute = ({
    component: Component,
    location,
    ...rest
}) => {
    const { isLoading, isAuthenticated } = useAuth0();

    if (isLoading && !isAuthenticated) {
        return <p>Loading...</p>
    }

    if (!isAuthenticated && location.pathname !== `/client/login`) {
        navigate("/client/login")
        return null
    }
    return <Component {...rest} />
}

export default PrivateRoute