import React from 'react'
import './Products.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ productsData, wishListedProducts, setWishListedProducts,cartItems,setCartItems ,setIsCartActive}) => {
    const navigate = useNavigate()
    const handleWishListedProducts = (item) => {
        
        navigate('/wishlist')
        setWishListedProducts((prev) => [...prev,item])
    }
    const handleAddToCard = (item) => {
        setCartItems([...cartItems,item])
        setIsCartActive(true)
    }
    
    return (
        <div className="productCards d-flex justify-content-center align-items-center flex-wrap">
            {
                productsData.map((item) => (
                    <div className="card" style={{ width: "18rem" }} key={item.id}>
                        <div className="image-container">

                            <img src={item.image} className="card-img-top" alt="..." />
                        </div>
                        <i className="fa-regular fa-heart" onClick={() => handleWishListedProducts(item)}></i>
                        <i className="fa-solid  fa-expand"></i>
                        <i className="fa-solid  fa-rotate-right"></i>
                        {(item.isNew || item.isDiscount) && (
                            <div className="badge-container">
                                {item.isNew && <span className="newSpan">New</span>}
                                {item.isDiscount && <span className="discountSpan">{item.discount}</span>}
                            </div>
                        )}
                        <button className="btn shop-button" onClick={() => handleAddToCard(item)}>Add To Cart</button>
                        <div className="card-body">
                            <p className="card-text itemName">{item.name}</p>
                            <p className="card-text itemName">${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard