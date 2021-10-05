import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Logout = () => {
    const { logout } = useAuth0()
    useEffect(() => {
        logout({ returnTo: window.location.hostname !== 'localhost' ? 'https://https://oakleyandcoombemain.gatsbyjs.io/client/login' : "http://localhost:8000/client/login" })
    })
    return (
        <div>Logging Out...</div>
    )
}

export default Logout