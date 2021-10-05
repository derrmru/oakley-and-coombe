import React from 'react'
import contentful from '../../images/technology/contentful.svg'
import firebase from '../../images/technology/firebase.svg'
import gats from '../../images/technology/gatsby.svg'
import netlify from '../../images/technology/netlify.svg'
import nextjs from '../../images/technology/nextjs.svg'
import vercel from '../../images/technology/vercel.svg'
import wordpress from '../../images/technology/wordpress.svg'
import * as style from './Technologies.module.css'

const Technologies = () => {
    return (
        <div className="w-11/12 mt-10 mb-20 md:mt-20 md:mb-40 pt-10 mx-auto bg-gradient-to-b from-indigo-800 to-transparent rounded-3xl">
            <h2>Technologies We Use</h2>
            <p className="w-10/12 md:w-1/2 my-10 mx-auto">We pick a dedicated set of tools for each project, for the best performance possible.</p>
            <div
                className="
                w-11/12 
                md:w-4/6 
                mx-auto 
                border-2 
                border-dotted 
                border-pink-800 
                rounded-3xl 
                p-10 
                flex 
                flex-wrap 
                justify-evenly
                bg-gradient-to-b
                from-indigo-800
                to-pink-800
                "
            >
                <img src={contentful} alt="" className={style.tech} />
                <img src={firebase} alt="" className={style.tech} />
                <img src={gats} alt="" className={style.tech} />
                <img src={netlify} alt="" className={style.tech} />
                <img src={nextjs} alt="" className={style.tech} />
                <img src={vercel} alt="" className={style.tech} />
                <img src={wordpress} alt="" className={style.tech} />
            </div>
        </div>
    )
}

export default Technologies