import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <div className="flex w-full py-10 fixed bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-md text-xs md:text-base">
            <div className="w-5/12 md:w-1/4">
                <Link
                    className="action1 text-xs md:text-base w-full md:w-1/2 mx-auto"
                    to="/contact"
                >
                    Get In Touch
                </Link>
            </div>
            <ol className="flex w-1/2">
                {
                    [['Home', '/'], ['About', '/about'], ['Services', '/services']].map((item, i) => {
                        return <Link
                            key={'navItem' + i}
                            to={item[1]}
                            className="flex-1 cursor-pointer"
                        >
                            <li>{item[0]}</li>
                        </Link>
                    })
                }
            </ol>
            <Link
                className="w-0 hidden md:inline md:w-1/4 cursor-pointer"
                to="/login"
            >
                Client Zone
            </Link>
        </div >
    )
}

export default Navbar