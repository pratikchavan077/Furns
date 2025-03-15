import React, { useEffect, useState } from 'react'
import './BillingDetails.css'
import { useNavigate } from 'react-router-dom'
const BillingDetails = ({cartItems}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()
    const handleNavigatetoSignIn = (e) => {
        e.preventDefault()
        navigate('/login')
    }
    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0)
        setTotalPrice(total.toFixed(2))
    }, [cartItems])
    
    let ecoTax = totalPrice * ((2) / 100)
    let vatPrice = (totalPrice - ecoTax) * (20 / 100)
    let total = (totalPrice - ecoTax + vatPrice)
    ecoTax = ecoTax.toFixed(2)
    vatPrice = vatPrice.toFixed(2)
    total = total.toFixed(2)
    return (
        <div className="container billingDetails d-flex justify-content-center">

            <form className="row g-3 needs-validation p-4" style={{ minWidth: "45%" }} noValidate>
                <h4>Billing Details</h4>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01"  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02"  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCompnyName" className="form-label">Company Name</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="validationCompnyName" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom04" className="form-label">Country</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option disabled >Choose...</option>
                        <option>...</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationAddress" className="form-label">Street Address</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" placeholder='House Number and Street Name' id="validationAddress" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please Enter a Street Address.
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" placeholder='Appartment, Suite, unit, etc.' id="validationStreet" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please Enter a Street Address.
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationTown" className="form-label">Town/City</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="validationTown" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please Enter a City Address.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">State</label>
                    <input type="text" className="form-control" id="validationCustom01"  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Zip</label>
                    <input type="number" className="form-control" id="validationCustom02"  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="validationCustom01"  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Email</label>
                    <input type="email" className="form-control" id="validationCustom02"  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Create an Account?
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="validationTextarea" className="form-label">Additional information</label>
                    <p><small>Order Notes</small></p>
                    <textarea className="form-control" id="validationTextarea" placeholder="Please Enter Your Order Notes Here..." required></textarea>
                    <div className="invalid-feedback">
                        Please enter a message in the textarea.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Ship to Different Address?
                        </label>
                    </div>
                </div>
            </form>
            <form className="row g-3 p-4 orderInfo" noValidate>
                <h4>Your Order</h4>
                <div className="col-md-10 d-flex justify-content-between">
                    <h6>Product</h6>
                    <h6>Total</h6>
                </div>

                
                    {
                        cartItems.length>0 ? (
                            cartItems.map((item,index) => (
                                <div key={index} className="col-md-10 d-flex justify-content-between">
                                
                                <p>{item.name} X 1</p>
                                <p>${item.price}</p>
                                </div>
                               
                            ))
                        ):(
                            <p>No Items in Cart</p>
                        )
                       
                    }
                <div className="col-md-10 d-flex justify-content-between">
                    <h6>Shipping</h6>
                    <p>Free Shipping</p>
                </div>
                <div className="col-md-10 d-flex justify-content-between">
                    <h5>Total</h5>
                    <p style={{ color: "#ff7004" }}><b>${total}</b></p>
                </div>
                <div className="col-md-10">
                    <h5>Direct bank transfer</h5>
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                </div>
                <div className="col-md-10">
                    <h5>Check payments</h5>
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                </div>
                <div className="col-md-10">
                    <h5>Cash on delivery</h5>
                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                </div>
                <button className="btn placeOrderBtn" onClick={() => handleNavigatetoSignIn(event)}><b>PLACE ORDER</b></button>
            </form>

        </div>
    )
}

export default BillingDetails