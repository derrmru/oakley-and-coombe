import React from 'react'
import mem from '../../../images/Memory.gif'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <div className="container w-full flex flex-wrap items-end py-10">
            <div className="w-full md:w-1/2 p-10 text-left">
                <h1 className="text-5xl lg:text-7xl text-gradient bg-gradient-to-r from-indigo-800 to-pink-800">
                    Oakley & Coombe
                </h1>
                <h2 className="text-base lg:text-xl pl-3">We Build<br />Faster and Better Websites</h2>
                <div className="my-10 ml-0 mr-10 flex">
                    <Link
                        className="action1 mr-5"
                        to="/contact"
                    >
                        Get In Touch
                    </Link>
                    <Link
                        className="action1"
                        to="/about"
                    >
                        How We Work
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <img src={mem} alt="banner showing IT skills" />
            </div>
        </div>
    )
}

export default Banner