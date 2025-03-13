import React from 'react'
import './SaleBanner.css'
import sale1 from '../../assets/sale1.webp'
import sale2 from '../../assets/sale2.webp'
import { useNavigate } from 'react-router-dom'
const SaleBanner = () => {
    const navigate = useNavigate()
    const handleNavigatetoShop = () => {
        navigate("/shop")
    }
    return (
        <>
            <section id='offers'>
            <div className="container">
                    <div className="heading mt-4">
                        <h1>Best Offers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis totam sint alias nobis adipisci a ad optio magni! Hic, quidem!</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="productBannersForOffers d-flex justify-content-evenly align-items-center flex-wrap">
                        <div className="card" onClick={handleNavigatetoShop}>
                            <img src={sale1} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title leftHeading">Sale Furniture For Summer</h5>
                                <p className="card-text leftText">Get Great Discounts</p>
                            </div>
                        </div>
                        <div className="card" onClick={handleNavigatetoShop}>
                            <img src={sale2} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title rightHeading">Office Chair for Best Offer</h5>
                                <p className="card-text rightText">Get Great Discounts</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SaleBanner