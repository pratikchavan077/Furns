import React from 'react'
import BreadCrump from '../BreadCrump/BreadCrump'
import BillingDetails from './BillingDetails'

const Checkout = ({cartItems}) => {
  return (
    <>
    <BreadCrump location="CHECKOUT" content="PLACE YOUR ORDER" />
    <div className="checkoutDetails">
      <BillingDetails cartItems={cartItems}/>
    </div>
    </>
    
  )
}

export default Checkout