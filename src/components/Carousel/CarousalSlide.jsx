import React from 'react'
import { useNavigate } from 'react-router-dom'


const CarousalSlide = ({ carouselData }) => {
    const navigate = useNavigate()

    const handleShopNowCarousal = () => {
        navigate('/shop')
    }
    return (
        <div className="carousel-inner">
            {
                carouselData.map((data,index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img src={data.image} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <h3>{data.title}</h3>
                            <h1>{data.heading}</h1>
                            <p>{data.description}</p>
                            <button type="button" className="btn" onClick={handleShopNowCarousal}>Shop Now</button>
                        </div>
                    </div>
                )
                )

            }</div>
    )
}

export default CarousalSlide