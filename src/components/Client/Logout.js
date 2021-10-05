import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { navigate } from 'gatsby'

const Logout = () => {
    const { logout } = useAuth0()
    useEffect(() => {
        logout()
        navigate('/client/login')
        return null
    })
    return (
        <div>Logging Out...</div>
    )
}

export default Logout