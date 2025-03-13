import React from 'react'
import news1 from '../../assets/news1.webp'
import './News.css'
const News = () => {
    return (

        <>
            <div className="container">
                <div className="heading mt-4">
                    <h1>Latest News</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis totam sint alias nobis adipisci a ad optio magni! Hic, quidem!</p>
                </div>
            </div>
            <div className="container">
                <div className="newsCard d-flex justify-content-center align-items-center">
                    <div className="card" style={{ width: "90%" }}>
                        <div className="imgContainer">

                            <img src={news1} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <span>14-Dec-24</span>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "90%" }}>
                        <div className="imgContainer">

                            <img src={news1} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <span>14-Dec-24</span>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "90%" }}>
                        <div className="imgContainer">

                            <img src={news1} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <span>14-Dec-24</span>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News