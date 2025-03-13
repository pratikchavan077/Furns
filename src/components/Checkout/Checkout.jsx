import React from 'react'
import BreadCrump from '../BreadCrump/BreadCrump'
import BillingDetails from './BillingDetails'

const Checkout = () => {
  return (
    <>
    <BreadCrump location="CHECKOUT" content="PLACE YOUR ORDER" />
    <div className="checkoutDetails">
      <BillingDetails />
    </div>
    </>
    
  )
}

export default Checkout