import React from 'react'
import Products from '../Products/Products'
import ProductCard from '../Products/ProductCard'
import BreadCrump from '../BreadCrump/BreadCrump'
import ShopSortings from './ShopSortings'
import './ShopSorting.css'

const Shop = ({ productsData }) => {
  return (
    <>
      <BreadCrump location="SHOP" content="SHOP" />
      
      {/* <button type="button" className="btn btn-primary btnFltr">Filters</button> */}
      <div className="shopSort d-flex justify-content-center">
        <ShopSortings />
        <ProductCard productsData={productsData} />
      </div>
    </>
  )
}

export default Shop