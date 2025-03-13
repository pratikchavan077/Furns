import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShopDropdown from "./ShopDropdown";
const shopCategory = [
    {
        "id": 1,
        "name": "Living Room",
        "slug": "living-room",
        "subcategories": [
            { "id": 101, "name": "Sofas & Couches", "slug": "sofas-couches" },
            { "id": 102, "name": "Sectionals", "slug": "sectionals" },
            { "id": 103, "name": "Coffee Tables", "slug": "coffee-tables" },
            { "id": 104, "name": "TV Stands", "slug": "tv-stands" }
        ]
    },
    {
        "id": 2,
        "name": "Bedroom",
        "slug": "bedroom",
        "subcategories": [
            { "id": 201, "name": "Beds", "slug": "beds" },
            { "id": 202, "name": "Wardrobes", "slug": "wardrobes" },
            { "id": 203, "name": "Dressers", "slug": "dressers" },
            { "id": 204, "name": "Nightstands", "slug": "nightstands" }
        ]
    },
    {
        "id": 3,
        "name": "Dining Room",
        "slug": "dining-room",
        "subcategories": [
            { "id": 301, "name": "Dining Tables", "slug": "dining-tables" },
            { "id": 302, "name": "Dining Chairs", "slug": "dining-chairs" },
            { "id": 303, "name": "Bar Stools", "slug": "bar-stools" }
        ]
    },
    {
        "id": 4,
        "name": "Office",
        "slug": "office",
        "subcategories": [
            { "id": 401, "name": "Office Desks", "slug": "office-desks" },
            { "id": 402, "name": "Office Chairs", "slug": "office-chairs" },
            { "id": 403, "name": "Filing Cabinets", "slug": "filing-cabinets" }
        ]
    },
    {
        "id": 5,
        "name": "Outdoor",
        "slug": "outdoor",
        "subcategories": [
            { "id": 501, "name": "Patio Sets", "slug": "patio-sets" },
            { "id": 502, "name": "Outdoor Sofas", "slug": "outdoor-sofas" },
            { "id": 503, "name": "Hammocks", "slug": "hammocks" }
        ]
    },
    {
        "id": 6,
        "name": "Kids",
        "slug": "kids",
        "subcategories": [
            { "id": 601, "name": "Kids’ Beds", "slug": "kids-beds" },
            { "id": 602, "name": "Study Tables", "slug": "study-tables" },
            { "id": 603, "name": "Toy Storage", "slug": "toy-storage" }
        ]
    }
]

const Navbar = () => {
    return (
        <div className="respNavbar">
            <div className="container d-flex justify-content-center align-items-center">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Navbar Toggler */}
                        <button
                            className="navbar-toggler ms-auto"  // Added "ms-auto" to keep it aligned right
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar Links */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {/* Home */}
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>

                                {/* About Us */}
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" to="/aboutus">About Us</Link>
                                </li>

                                {/* Shop Dropdown */}
                                <ShopDropdown shopCategory={shopCategory} />

                                {/* Pages Dropdown */}
                                <li className="nav-item mx-3">
                                    <a className="nav-link active" href="#new-arrivals">New Arrivals</a>
                                </li>

                                {/* Blog Dropdown */}
                                <li className="nav-item mx-3">
                                    <a className="nav-link active" href="#offers">Offers</a>
                                </li>

                                {/* Contact Us */}
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" to="/contact">Contact Us</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
