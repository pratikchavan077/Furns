import React from 'react'

import './Carousel.css'
import CarousalSlideIndicator from './CarousalSlideIndicator'
import CarousalSlide from './CarousalSlide'
import CarousalButtons from './CarousalButtons'
// console.log(carouselData[0].id)
const Carousel = ({carouselData}) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <CarousalSlideIndicator carouselData={carouselData}/>
            <CarousalSlide carouselData={carouselData}/>
            <CarousalButtons />
        </div>
    )
}

export default Carousel