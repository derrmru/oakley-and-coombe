import React from "react"
import { Router } from "@reach/router"
import Layout from '../templates/Layout'
import PrivateRoute from "../components/PrivateRoute"
import Profile from "./Profile"
import Login from "../login"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/user/profile" component={Profile} />
            <Login path="/login" />
        </Router>
    </Layout>
)

export default App