import React from 'react'
import Products from '../Products/Products'
import ProductCard from '../Products/ProductCard'
import BreadCrump from '../BreadCrump/BreadCrump'
import ShopSortings from './ShopSortings'

const Shop = ({ productsData }) => {
  return (
    <>
      <BreadCrump location="SHOP" content="SHOP" />
      <div className="shopSort d-flex justify-content-center">
        <ShopSortings />
        <ProductCard productsData={productsData} />
      </div>
    </>
  )
}

export default Shop