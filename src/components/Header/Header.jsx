import React from 'react'
import './Header.css'
import HeaderSearch from './HeaderSearch'
import HeaderUser from './HeaderUser'
import HeaderCart from './HeaderCart'
const Header = ({cartItems,setCartItems,isCartActive,setIsCartActive,qty}) => {

    return (
        <div className="container">
            <div className="headingSection d-flex justify-content-between align-items-center py-4">
                {/* Brand Name */}
                <div className="headingName">
                    <h1>FURNS</h1>
                </div>
                {/* Search-user-Cart Logos */}
                <div className="headingLogo d-flex justify-content-center align-items-center">
                    <HeaderSearch />
                    <div className="divider"></div>
                    <HeaderUser />
                    <div className="divider"></div>
                    <HeaderCart qty={qty} cartItems={cartItems} setCartItems={setCartItems} isCartActive={isCartActive} setIsCartActive={setIsCartActive}/>
                </div>
            </div>
            
        </div>
    )
}

export default Header