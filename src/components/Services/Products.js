import React from 'react'
import PWA from '../../images/services/PWA.svg'
import * as style from './Products.module.css'

const products = [
    {
        product: 'Website',
        brief: 'People and search engines love fast websites. We leverage the latest developments in modern web architecture to design and build performant, secure, SEO friendly and scalable websites.',
        image: PWA
    },
    {
        product: 'eCommerce',
        brief: 'Boost your eCommerce site with modern tools and infrastructure. We utilise the latest technologies to bring performance, bespoke content management, security and lower operational costs to your business.',
        image: ''
    },
    {
        product: 'Progressive Web Apps',
        brief: 'Take your web app to mobile without the need to develop for multiple Operating Systems or your users to even download an app. We aim to bring the best of Native App and Web technology to your users fingertips.',
        image: ''
    }
]

const Products = () => {

    return (
        <div className={style.background + ' w-full py-20'}>
            <div className="w-11/12 mx-auto bg-gradient-to-b from-indigo-800 to-transparent py-10 rounded-3xl">
                <h2>Use Cases</h2>
                <div className="w-11/12 mx-auto flex flex-wrap justify-evenly">
                    {
                        products.map((item, i) => {
                            return <div
                                key={"product" + i}
                                className="w-full lg:w-1/2 p-5 lg:px-32 lg:py-10 text-center"
                            >
                                <h3>{item.product}</h3>
                                <p className="my-10">{item.brief}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products