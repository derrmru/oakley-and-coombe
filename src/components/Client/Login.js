import React from 'react'
import Layout from '../../templates/Layout'
import { navigate } from 'gatsby'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        navigate('/client/dashboard')
        return null
    }

    return (
        <Layout>
            <div className="text-left m-20">
                <p className="border-0 md:border-t-4 pt-10 w-full md:w-5/12 border-white">Please click the below to securely login or signup to your private dashboard.</p>
                <button className="action1 mt-10 mb-20" onClick={() => loginWithRedirect()}>Login</button>
            </div>
        </Layout>
    )
}

export default Login