import React, { useState } from 'react'

const ProductNavlinks = ({activeLink,setActiveLink}) => {
    
    return (
        <>
            <div className="navLinks">
                <a className={activeLink === "newArrival" ? "active":""} onClick={() => setActiveLink("newArrival")}>New Arrivals</a>
                <a className={activeLink === "bestSeller" ? "active":""} onClick={() => setActiveLink("bestSeller")}>Best Sellers</a>
                <a className={activeLink === "saleItem" ? "active":""} onClick={() => setActiveLink("saleItem")}>Sale Items</a>
                <a className={activeLink === "onSale" ? "active":""} onClick={() => setActiveLink("onSale")}>On Sales</a>
            </div>
        </>
    )
}

export default ProductNavlinks