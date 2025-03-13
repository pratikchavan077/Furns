import React from 'react'
import './CollectionCards.css'
import coll1 from '../../assets/ofcChair.webp'
import coll2 from '../../assets/livingRoom.webp'
import coll3 from '../../assets/childRoom.webp'
import { Link } from 'react-router-dom'

const collectionCardItems = [
    {
        id: 0,
        image: coll1,
        title: "New Office Chair Collection"
    },
    {
        id: 1,
        image: coll2,
        title: "Living Room Collection"
    },
    {
        id: 2,
        image: coll3,
        title: "Children Room Collection"
    }
]
const CollectionCardItem = () => {
    return (
        <div className="collectionCards">
            <div className="cards d-flex justify-content-center align-items-center flex-wrap">
                {
                    collectionCardItems.map((item) => (
                        <div className="card collectionCard" key={item.id}>
                            <img src={item.image} className="card-img collectionCardImg" alt="..." />
                            <div className="card-img-overlay">
                                <h4 className="card-title">{item.title}</h4>
                                <Link to="/shop">Shop Now</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionCardItem