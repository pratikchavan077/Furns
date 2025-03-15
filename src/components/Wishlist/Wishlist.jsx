import React, { useState } from "react";
import BreadCrump from "../BreadCrump/BreadCrump";
import "./Wishlist.css"; // Import the CSS file for styles

const Wishlist = ({ productsData,qty, setQty,setCartItems,cartItems }) => {
    const handleMinus = () => {
        if(qty>1){
            setQty(qty - 1)
        }
        
    }
    const handlePlus = () => {
        setQty(qty + 1)
        
    }
  return (
    <>
      <BreadCrump content="FAVOURITES" location="WISHLIST" />
      <div className="container wishlist-container">
        <h3>Your Cart Items</h3>
        <table className="table wishlist-table">
          <thead>
            <tr style={{backgroundColor:"#ff6e04"}}>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>UNIT PRICE</th>
              <th>QTY</th>
              <th>SUBTOTAL</th>
              <th>ADD TO CART</th>
            </tr>
          </thead>
          <tbody>
            {
                productsData.length > 0 ?
                ( 
                    productsData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="img-container">
                              <img src={item.image} alt={item.name} className="wishlist-img" />
                            </div>
                          </td>
                          <td className="product-name">{item.name}</td>
                          <td>${item.price}</td>
                          <td>
                            <div className="quantity-control">
                              <button className="qty-btn" onClick={handleMinus} style={{backgroundColor:"white"}}>-</button>
                              <input type="text" value={qty} readOnly className="qty-input" />
                              <button className="qty-btn" onClick={handlePlus} style={{backgroundColor:"white"}}>+</button>
                            </div>
                          </td>
                          <td>${(item.price*qty).toFixed(2)}</td>
                          <td>
                            <button className="btn add-to-cart-btn" onClick={() => {
                                // setCartItems([...cartItems, { ...item, qty: quantities[item.id] }]);
                                setCartItems([...cartItems, item ]);
                            }}>ADD TO CART</button>
                          </td>
                        </tr>
                      ))
                ):(<tr>
                    <td colSpan="6" className="text-center">
                      <h6 className="no-items">No Wishlisted Items Available</h6>
                    </td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Wishlist;
