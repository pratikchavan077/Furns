import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import BreadCrump from '../BreadCrump/BreadCrump'

const Login = () => {
    const [activeTab, setActiveTab] = useState("login")
    return (
        <>
            <BreadCrump location={activeTab === "login" ? "LOGIN" : "REGISTER"} content={activeTab === "login" ? "LOGIN" : "SIGN UP"} />
            <div className="container">
                <div className="loginRegisterLabel text-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">

                            <li className="breadcrumb-item"><Link style={{ color: activeTab === "login" ? "#ff6e04" : "black", letterSpacing: "0.1rem" }} className='path' onClick={() => setActiveTab("login")}><h3>LOGIN</h3></Link></li>
                            <span> | </span>
                            <li className="breadcrumb-item"><Link style={{ color: activeTab === "register" ? "#ff6e04" : "black", letterSpacing: "0.1rem" }} className='path' onClick={() => setActiveTab("register")}><h3>REGISTER</h3></Link></li>
                        </ol>
                    </nav>
                </div>
                {
                    activeTab === "login" ? (
                        <div className="loginForm">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check check">
                                    <input type="checkbox" className="form-check-input inp" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" className="btn">LOGIN</button>
                            </form>
                        </div>
                    ) : (
                        <div className="loginForm">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1" />

                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <button type="submit" className="btn">REGISTER</button>
                            </form>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Login