import React from 'react'
import Layout from './templates/Layout'
import Headline from './components/About/Headline'
import Caption from './components/About/Caption'
import Values from './components/About/Values'

const About = () => {
    return (
        <Layout>
            <Headline />
            <Caption />
            <Values />
        </Layout>
    )
}

export default About