import React from 'react'

const Values = () => {
    const values = [
        {
            value: "Customer Satisfaction",
            brief: "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."
        },
        {
            value: "Collaboration",
            brief: "Our clients and our developers must work together daily throughout the project."
        },
        {
            value: "Progress",
            brief: "Working software is the primary measure of progress."
        },
        {
            value: "Best Practice",
            brief: "We believe continuous attention to technical excellence and good design enhances our clients project."
        }
    ]

    return (
        <div className="container">
            <div className="rounded-2xl mb-20 p-10 bg-indigo-800">
                <h2>Values</h2>
                <p className="w-11/12 lg:w-1/2 mx-auto my-10">As a team we share the same values and high level of expertise.</p>
                <div className="w-11/12 mx-auto flex flex-wrap justify-evenly border-t-4 border-dashed border-white">
                    {
                        values.map((item, i) => {
                            return <div
                                key={"value" + i}
                                className="w-full md:w-5/12 my-10 p-5 border-2 border-dotted border-gray-800 rounded-xl bg-gradient-to-b from-pink-800 to-transparent"
                            >
                                {item.image}
                                <h3>{item.value}</h3>
                                <p className="m-5">{item.brief}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Values