import React, { useState } from 'react'
import './Products.css'

import ProductHeading from './ProductHeading'
import ProductNavlinks from './ProductNavlinks'
import ProductCard from './ProductCard'
const Products = ({productsData,wishListedProducts,setWishListedProducts,qty, setQty,cartItems,setCartItems,setIsCartActive}) => {
    const[activeLink, setActiveLink] = useState("newArrival")
   
        const activeLinkProduct = productsData.filter((newItem) => {
            if(activeLink === "newArrival") return newItem.isNew;
            if(activeLink === "saleItem") return newItem.isDiscount;
            if(activeLink === "bestSeller") return !newItem.isNew && !newItem.isDiscount
            if(activeLink === "onSale") return newItem.isDiscount;
        }
    )
    return (
        <>
            <div className="container">
                <ProductHeading 
                    title="Our Products" 
                    desc="Furns is an independent decoration design studio featuring contemporary design for every aspect of the home environment. Dealing with the rich experiences furniture manufacturers, Furns designs and manufactures bespoke contemporary and modern decoration products." 
                />
                <ProductNavlinks activeLink={activeLink} setActiveLink={setActiveLink}/>
            </div>
            <div className="container-fluid">
                <ProductCard cartItems={cartItems} setCartItems={setCartItems} qty={qty} setQty={setQty} productsData = {activeLinkProduct} wishListedProducts={wishListedProducts} setWishListedProducts={setWishListedProducts} setIsCartActive={setIsCartActive}/>
            </div>
            
        </>
    )
}

export default Products