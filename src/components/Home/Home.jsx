import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Carousel from '../Carousel/Carousel'
import CollectionCards from '../Collections/CollectionCards'
import Products from '../Products/Products'
import SaleBanner from '../SaleBanners/SaleBanner'
import NewProduct from '../NewProducts/NewProduct'
import News from '../News/News'
import ProductCard from '../Products/ProductCard'

const Home = ({productsData,carouselData,wishListedProducts,setWishListedProducts,qty,setQty,cartItems,setCartItems,setIsCartActive}) => {
    return (
        <>
            <Carousel carouselData={carouselData}/>
            <CollectionCards />
            <Products qty={qty} setQty={setQty} productsData = {productsData} wishListedProducts={wishListedProducts} setWishListedProducts ={setWishListedProducts} cartItems={cartItems} setCartItems={setCartItems} setIsCartActive={setIsCartActive} />
            <SaleBanner />
            <NewProduct productsData= {productsData}/>
            <News />
        </>
    )
}

export default Home