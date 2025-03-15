import React from 'react'

const CarousalSlideIndicator = ({carouselData}) => {
    return (
        <div className="carousel-indicators">
            {
                carouselData.map((data,index) => (
                    <button key={data.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : ""}></button>
                ))
            }
        </div>
    )
}

export default CarousalSlideIndicator