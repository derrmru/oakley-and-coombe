import React from "react"
import Layout from './templates/Layout'
import Banner from './components/Home/Banner'
import About from './components/Home/About'
import Technologies from './components/Home/Technologies'

export default function Home() {
  return (
    <div className="w-full">
      <Layout>
        <Banner />
        <About />
        <Technologies />
      </Layout>
    </div>
  )
}
