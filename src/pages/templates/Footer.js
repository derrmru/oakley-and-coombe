import React from 'react'
import { Link } from 'gatsby'
import * as style from './Footer.module.css'

const Footer = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-wrap justify-evenly border-t-4 border-white p-10">
            <div className={style.col}>
                <p className={style.head}>Contact</p>
                <div className={style.item}><a href="tel:+33787207034">Telephone: +33 7 87 20 70 34</a></div>
                <div className={style.item}><a href="mailto:contact@oakleyandcoombe.com">Email: contact@oakleyandcoombe.com</a></div>
                <div className={style.item}><a href="tel:+33787207034">Address: 19 bis Le Coustil, Salles, France 81640</a></div>
            </div>
            <div className={style.col}>
                <p className={style.head}>Quicklinks</p>
                <div className={style.item}><Link to="/services">Services</Link></div>
                <div className={style.item}><Link to="/contact">Contact</Link></div>
                <div className={style.item}><Link to="/client/login">Client</Link></div>
            </div>
            <div className={style.col}>
                <p className={style.head}>Social</p>
                <div className={style.item}><a href="/">TWITTER</a></div>
                <div className={style.item}><a href="/">FACEBOOK</a></div>
                <div className={style.item}><a href="/">INSTAGRAM</a></div>
            </div>
            <p className="text-xs">©2021 Oakley & Coombe Ltd.</p>
        </div>
    )
}

export default Footer