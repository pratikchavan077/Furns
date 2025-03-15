import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderCartPriceCalculate from "./HeaderCartPriceCalculate";

const HeaderCart = ({ cartItems, isCartActive, setIsCartActive, qty }) => {

    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0)
        setTotalPrice(total.toFixed(2))
    }, [cartItems])

    return (
        <div className="headingLogoItem">
            <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() => setIsCartActive(true)}
            >
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="position-absolute p-1 mt-2 my-2 top-0 translate-middle badge rounded-pill" style={{ borderRadius: "50%", backgroundColor: "#ff7004" }}>
                    <small>{cartItems.length}</small>
                    <span className="visually-hidden">Items in Cart</span>
                </span>
            </button>
            {isCartActive && (
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Cart
                        </h5>
                        <button
                            type="button"
                            style={{ color: "orange" }}
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        {cartItems.map((item, index) => (

                            <div key={index}>
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={item.image}
                                                className="img-fluid rounded-start cartProductImage"
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body cartCardBody">
                                                <div className="cardHeading">
                                                    <p className="card-title">
                                                        <small>{item.name}</small>
                                                    </p>
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">1 x </small>$
                                                    {item.price}
                                                </p>
                                            </div>
                                            <small><i className="fa-solid fa-trash px-3"></i></small>
                                        </div>
                                    </div>
                                </div>
                                {/* Add divider except for last item */}
                                {index !== cartItems.length && <hr />}
                            </div>

                        ))}

                        <HeaderCartPriceCalculate totalPrice={totalPrice} cartItems={cartItems} setIsCartActive={setIsCartActive}/>
                    </div>

                </div>

            )}

        </div>
    );
};

export default HeaderCart;
