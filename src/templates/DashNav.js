import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'gatsby'

const DashNav = () => {
    const { user } = useAuth0();

    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex justify-end items-center w-full py-10 fixed bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-md text-xs md:text-base">
            <div>
                <Link className="mr-10" to="/client/dashboard">Dashboard</Link>
                <Link className="mr-10" to="/client/projects">Projects</Link>
                <Link className="mr-10" to="/client/settings">Settings</Link>
            </div>
            <div
                onClick={() => setToggle(!toggle)}
                onKeyDown={(e) => console.log(e)}
                className="cursor-pointer mx-10 relative"
                role="menu"
                tabIndex={0}
            >
                <img src={user.picture} alt="" className="rounded-full w-10" />
                {
                    toggle && <div className="absolute right-0 p-5 bg-white flex flex-col items-start text-gray-800">
                        <Link className="my-2" to="/client/logout">Logout</Link>
                    </div>
                }
            </div>
        </div >
    )
}

export default DashNav