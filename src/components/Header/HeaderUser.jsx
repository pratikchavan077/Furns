import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HeaderUser = () => {
    const [isClicked, setIsClicked] = useState(false)
    const navigate = useNavigate()
    const dropdownRef = useRef(null);
    const toggleUserProfileOptions = () => {
        setIsClicked((prev) => !prev)
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleNavigateToAccount = () => {
        navigate("/account")
    }
    const handleNavigateToCheckOut = () => {
        navigate("./checkout")
    }
    const handleNavigateToLoginPage = () => {
        navigate("./login")
    }
    return (
        <>
            <div className='headingLogoItem px-4' onClick={toggleUserProfileOptions} ref={dropdownRef}>
                <i className="fa-regular fa-user"></i>
                {
                    isClicked && (
                        <div className={`profileList ${isClicked ? "active":""}`}>
                            <ul>
                                <li onClick={handleNavigateToAccount}>My Account</li>
                                <li onClick={handleNavigateToCheckOut}>Checkout</li>
                                <li onClick={handleNavigateToLoginPage}>Sign In</li>
                            </ul>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default HeaderUser