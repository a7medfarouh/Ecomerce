import React from 'react'
import img from "../../Asset/3386851.jpg"
export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark text-white border-0">
                <img src={img} className="card-img " alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder">NEW SESSION ARIVAlS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
