import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Logout = () => {
    const { logout } = useAuth0()
    useEffect(() => {
        const redirect = 'https://https://oakleyandcoombemain.gatsbyjs.io/client/login'
        if (redirect) logout({ returnTo: redirect })
    })
    return (
        <div>Logging Out...</div>
    )
}

export default Logout