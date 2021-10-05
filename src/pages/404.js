import React from 'react'
import Layout from '../templates/Layout'
import { Link } from 'gatsby'

const FourOhFour = () => {
    return (
        <Layout>
            <div className="container py-20">
                <h1>Such Sadness</h1>
                <p>Your page doesn't exist.</p>
                <div className="pt-10"><Link to="/">Head Back Home</Link></div>
            </div>
        </Layout>
    )
}

export default FourOhFour