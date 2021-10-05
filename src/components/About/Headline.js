import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Headline = () => {
    return (
        <div className="container my-5 pt-10 pb-20 lg:pb-5 lg:pt-0 px-10 bg-gradient-to-r from-gray-800 to-pink-800 rounded-3xl flex flex-wrap justify-even items-center">
            <div className="w-full lg:w-1/2 my-0 lg:text-left">
                <h1 className="my-10 px-0 lg:px-20">A Forward Thinking Development Agency</h1>
                <div className="px-0 lg:px-20"><Link to='/services' className="action1">See Our Services</Link></div>
            </div>
            <div className="hidden lg:inline w-full lg:w-1/2">
                <StaticImage src="../../images/About.svg" placeholder="blurred" />
            </div>
        </div>
    )
}

export default Headline