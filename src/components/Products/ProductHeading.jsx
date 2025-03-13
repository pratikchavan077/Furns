import React from 'react'

const ProductHeading = ({title,desc}) => {
    return (
        <div className="heading">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default ProductHeading