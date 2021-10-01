import React from 'react'
import image from '../../../images/Speed.svg'
import speed from '../../../images/SpeedIcon.svg'
import distributed from '../../../images/DistributedIcon.svg'
import secure from '../../../images/SecureIcon.svg'
import scalable from '../../../images/ScalabilityIcon.svg'
import * as style from './About.module.css'

const About = () => {
    return (
        <div className={style.background + " w-full bg-gradient-to-b from-gray-800 via-gray-800 to-indigo-800 flex flex-wrap py-12"}>
            <div className="w-full mx-auto pb-10">
                <h2>Expertise In Web Technology</h2>
                <p className="py-5 w-5/6 lg:w-1/2 mx-auto">Maximize your business potential with performant websites built with the latest, innovative technologies.</p>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="w-5/6 mx-auto rounded-2xl pt-0 md:pt-10 pb-10 md:pb-32 bg-gradient-to-b from-indigo-800 via-pink-800 to-transparent">
                    <img src={image} alt="" className="mb-20 md:mb-0 w-5/6 md:w-1/2 mx-auto svg" />
                </div>
            </div>
            <div className="w-11/12 mx-auto py-0 pl-5 pr-10 lg:w-1/2 text-left">
                <h3 className="text-center my-10 md:my-0 md:text-left">Jamstack</h3>
                <div className={style.pointBox}>
                    <img src={speed} alt="" className={style.icon} />
                    <div>
                        <h4>Better Performance</h4>
                        <p className="text-sm">Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.</p>
                    </div>
                </div>
                <div className={style.pointBox}>
                    <img src={distributed} alt="" className={style.icon} />
                    <div>
                        <h4>Highly Distibuted</h4>
                        <p className="text-sm">Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions.</p>
                    </div>
                </div>
                <div className={style.pointBox}>
                    <img src={secure} alt="" className={style.icon} />
                    <div>
                        <h4>Increased Security</h4>
                        <p className="text-sm">With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.</p>
                    </div>
                </div>
                <div className={style.pointBox}>
                    <img src={scalable} alt="" className={style.icon} />
                    <div>
                        <h4>Scalability</h4>
                        <p className="text-sm">When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About