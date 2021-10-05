import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Headline = () => {
    return (
        <div className="w-11/12 mx-auto mb-10 lg:mb-20 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 text-left pb-10 lg:py-20">
                <h1 className="text-5xl lg:text-7xl text-gradient bg-gradient-to-r from-indigo-800 to-pink-800">Our Services</h1>
                <p>From Websites, to eCommerce to Progressive Web Apps, we help provide a competitive edge.</p>
                <div className=" w-full lg:w-7/12 action1 mt-10 lg:my-10 cursor-pointer"><Link to="/contact">Request Our Services</Link></div>
            </div>
            <div className="w-full lg:w-1/2 text-center bg-pink-800 py-10 lg:py-20 rounded-full backdrop-filter backdrop-blur-lg">
                <StaticImage src="../../images/Services.svg" placeholder="blurred" objectFit="cover" />
            </div>

        </div>
    )
}

export default Headline