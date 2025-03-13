import React from 'react'
import ProductCard from '../Products/ProductCard'
const NewProduct = ({ productsData }) => {
    const newProducts = productsData.filter((product) => product.isNew)
    return (
        <>
            <section id="new-arrivals">
                <div className="container">
                    <div className="heading mt-4">
                        <h1>New Products</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis totam sint alias nobis adipisci a ad optio magni! Hic, quidem!</p>
                    </div>
                </div>
                <div className="container-fluid">
                    {
                        newProducts.length > 0 && (
                            <div className="productCards d-flex justify-content-center align-items-center flex-wrap">
                                <ProductCard productsData={newProducts} />
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default NewProduct