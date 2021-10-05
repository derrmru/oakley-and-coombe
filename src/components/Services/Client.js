import React from 'react'
import { Link } from 'gatsby'

const Client = () => {
    return (
        <div className="w-11/12 mx-auto py-20">
            <h2>Client Portal</h2>
            <p className="w-11/12 mx-auto lg:w-4/12 py-5">Use our convenient client portal to manage your projects, from start to finish.</p>
            <div className="my-10"><Link className="action1" to="/client/login">Create A Client Account</Link></div>
        </div>
    )
}

export default Client