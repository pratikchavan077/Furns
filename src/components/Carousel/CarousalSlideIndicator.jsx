import React from 'react'

const CarousalSlideIndicator = ({carouselData}) => {
    return (
        <div className="carousel-indicators">
            {
                carouselData.map((data) => (
                    <button key={data.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={data.id} className={data.id === 0 ? "active" : ""} aria-current={data.id === 0 ? "true" : ""}></button>
                ))
            }
        </div>
    )
}

export default CarousalSlideIndicator