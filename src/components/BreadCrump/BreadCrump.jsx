import React from 'react'
import { Link } from 'react-router-dom'
import './BreadCrump.css'
const BreadCrump = ({ location, content }) => {
    return (
        <>
            <div className="about d-flex justify-content-between">
                <div className="pageTitle">
                    <h1>{content}</h1>
                </div>
                <div className="location">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link style={{ color: "#ff6e04", letterSpacing: "0.1rem" }} className='path' to="/">HOME</Link></li>
                            <span> / </span>
                            <li className="breadcrumb-item" style={{ color: "black", letterSpacing: "0.1rem" }} aria-current="page">{location}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>

    )
}

export default BreadCrump