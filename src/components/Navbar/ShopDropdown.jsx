import React from 'react'
import { Link } from 'react-router-dom'

const ShopDropdown = ({shopCategory}) => {
    return (
        <>
            <li className="nav-item mx-3 dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Shop
                </a>
                <ul className="dropdown-menu multi-column">
                    <div className="dropdown-columns">
                        {shopCategory.map((category) => (
                            <div className="column" key={category.id}>
                                <li><h6 className="dropdown-header">{category.name}</h6></li>
                                <li><hr className="dropdown-divider" /></li>
                                {category.subcategories.map((subCat) => (
                                    <li key={subCat.id}>
                                        <Link className="dropdown-item" to="shop">{subCat.name}</Link>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </div>
                </ul>
            </li>
        </>
    )
}

export default ShopDropdown