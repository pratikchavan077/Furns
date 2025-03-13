import React from 'react'
import Products from '../Products/Products'
import ProductCard from '../Products/ProductCard'
import BreadCrump from '../BreadCrump/BreadCrump'

const Shop = ({productsData}) => {
  return (
    <>
    <BreadCrump location="SHOP" content="SHOP" />
    <ProductCard productsData = {productsData}/>
    </>
  )
}

export default Shop