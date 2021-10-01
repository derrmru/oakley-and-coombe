import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (location.pathname !== `/user/login`) {
        navigate("/user/login")
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute