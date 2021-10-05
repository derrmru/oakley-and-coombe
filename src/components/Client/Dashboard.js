import React from 'react'
import DashLayout from '../../templates/DashLayout'
import { navigate } from 'gatsby'
import { useAuth0 } from '@auth0/auth0-react'

const Dashboard = () => {
    const { isAuthenticated, user } = useAuth0();

    if (!isAuthenticated) {
        navigate('/client/login')
        return null
    }

    return (
        <DashLayout>
            <p>Welcome {user.name}!</p>
        </DashLayout>
    )
}

export default Dashboard