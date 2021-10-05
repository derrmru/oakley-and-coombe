import React from 'react'
import Layout from '../templates/Layout'
import Headline from '../components/Services/Headline'
import Products from '../components/Services/Products'
import Client from '../components/Services/Client'

const Services = () => {
    return (
        <Layout>
            <Headline />
            <Products />
            <Client />
        </Layout>
    )
}

export default Services