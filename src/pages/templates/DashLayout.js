import React from 'react'
import DashNav from './DashNav'

const DashLayout = ({ children }) => {
    return (
        <>
            <DashNav />
            <div className="pt-32 container text-left">{children}</div>
        </>
    )
}

export default DashLayout