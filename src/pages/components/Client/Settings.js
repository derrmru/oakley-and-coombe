import React from 'react'
import DashLayout from '../../templates/DashLayout'
import { useAuth0 } from '@auth0/auth0-react'
import { navigate } from 'gatsby'

const Settings = () => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        navigate('/client/login')
        return null
    }

    return (
        <DashLayout>
            <div>Settings</div>
        </DashLayout>
    )
}

export default Settings