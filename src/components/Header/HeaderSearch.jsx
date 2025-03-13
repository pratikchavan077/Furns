import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const HeaderSearch = () => {
    const [isDisplaySearch, setIsDisplaySearch] = useState(false)
    const dropdownRef = useRef(null);

    const handleDisplaySearchBar = () => {
        setIsDisplaySearch((prev) => !prev)
    }

    useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsDisplaySearch(false);
                }
            };
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
    return (
        <>
            <div className={"headingLogoItem px-4"} ref={dropdownRef}  >
                <i className="fa-solid fa-magnifying-glass" onClick={handleDisplaySearchBar}></i>
                <div className={`searchBar  ${isDisplaySearch ? "active" : ""}`} ref={dropdownRef}>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
            {isDisplaySearch && (
                <div className="searchBar">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <form className="d-flex w-100" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

export default HeaderSearch