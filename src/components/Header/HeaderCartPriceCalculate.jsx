import React, { useState } from 'react'
import './Header.css'
import { useNavigate, } from 'react-router-dom'
const HeaderCartPriceCalculate = ({ totalPrice,setIsCartActive }) => {
    const navigate = useNavigate()
    const naviageToCheckout = () => {
        setIsCartActive(false)
        setTimeout(() => navigate('/checkout'), 100);
        
    }
    let ecoTax = totalPrice * ((2) / 100)
    let vatPrice = (totalPrice - ecoTax) * (20 / 100)
    let total = (totalPrice - ecoTax + vatPrice)
    ecoTax = ecoTax.toFixed(2)
    vatPrice = vatPrice.toFixed(2)
    total = total.toFixed(2)
    return (
        <>
            <div className="calculation ">
                <div className="subTotal d-flex justify-content-between">
                    <p>Sub-Total:</p>
                    <p>${totalPrice}</p>
                </div>
                <div className="subTotal d-flex justify-content-between">
                    <p>Eco-Tax (-2%):</p>
                    <p>${ecoTax}</p>
                </div>
                <div className="subTotal d-flex justify-content-between">
                    <p>VAT (20%):</p>
                    <p>${vatPrice}</p>
                </div>
                <div className="subTotal d-flex justify-content-between">
                    <p>Total:</p>
                    <p className='finalAmt'>${total}</p>
                </div>
                <div className="cartbuttons d-flex flex-column">
                    <button type="button" className="btn button1 my-3 py-3">View Cart</button>
                    <button type="button"  data-bs-dismiss="offcanvas" className="btn button2 my-3 py-3" onClick={naviageToCheckout}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default HeaderCartPriceCalculate