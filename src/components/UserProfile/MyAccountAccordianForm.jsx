import React from 'react'
import './MyAccount.css'
const MyAccountAccordianForm = ({ number,onClickNavigate }) => {
    const handleBack = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    if (number === 1) {
        return (
            <div className="container">
                <div className="editAcctInfo">
                    <h5>MY ACCOUNT INFORMATION</h5>
                    <p>Your Personal Details</p>
                    <div className="divide"></div>
                    <form>
                        <div className="mb-3">
                            <div className="name">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />

                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control my-2" id="lastName" name="lastName" aria-describedby="lastName" />

                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control my-2" id="email" name="email" aria-describedby="email" />

                                <label htmlFor="tel" className="form-label">Phone</label>
                                <input type="tel" className="form-control my-2" id="tel" name="tel" aria-describedby="tel" />


                            </div>
                        </div>

                        <div className="formButtons d-flex justify-content-between">
                            <button className="btn back" onClick={handleBack}><small><i className="fa-solid fa-arrow-up px-2" style={{ color: "#ff6e04" }}></i></small> Back</button>
                            <button type='submit' className="btn btnSubmit" onClick={handleSubmit}>CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    else if (number === 2) {
        return (
            <div className="container">
                <div className="PasswordChange">
                    <h5>Change Password</h5>
                    <p>Your Password</p>
                    <div className="divide"></div>
                    <form>
                        <div className="mb-3">
                            <div className="password">
                                <label htmlFor="password" className="form-label">New Password</label>
                                <input type="password" className="form-control my-2" id="password" name="password" aria-describedby="password" />

                                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control my-2" id="confirmpassword" name="confirmpassword" aria-describedby="confirmpassword" />
                            </div>
                        </div>

                        <div className="formButtons d-flex justify-content-between">
                            <button className="btn back" onClick={handleBack}><small><i className="fa-solid fa-arrow-up px-2" style={{ color: "#ff6e04" }}></i></small> Back</button>
                            <button type='submit' className="btn btnSubmit" onClick={handleSubmit}>CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    else if (number === 3) {
        return (
            <div className="container">
                <div className="PasswordChange">
                    <h5>ADDRESS BOOK ENTRIES</h5>
                    <div className="divide"></div>
                    <form>
                        <div className="mb-3">
                            <div className="password">
                            <label htmlFor="firstName" className="form-label">Street/Building/Flat No.</label>
                            <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />

                            <label htmlFor="firstName" className="form-label">Landmark</label>
                            <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />
                            <label htmlFor="firstName" className="form-label">City</label>
                            <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />
                            <label htmlFor="firstName" className="form-label">State</label>
                            <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />
                            <label htmlFor="firstName" className="form-label">Country</label>
                            <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />
                            <label htmlFor="firstName" className="form-label">Pincode</label>
                            <input type="text" className="form-control my-2"  name="firstName" aria-describedby="firstName" />
                            </div>
                        </div>

                        <div className="formButtons d-flex justify-content-between">
                            <button className="btn back" onClick={handleBack}><small><i className="fa-solid fa-arrow-up px-2" style={{ color: "#ff6e04" }}></i></small> Back</button>
                            <button type='submit' className="btn btnSubmit" onClick={handleSubmit}>CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    else if (number === 4) {
        return (
          <div className="container">
            <div className="modifyWishlist">
              <h5>MODIFY YOUR WISHLIST</h5>
              <div className="divide"></div>
              <p>Click the button below to view or edit your wishlist.</p>
              <div className="formButtons d-flex justify-content-between">
                <button className="btn btnSubmit" onClick={onClickNavigate}>
                  Modify Your Wishlist
                </button>
              </div>
            </div>
          </div>
        );
      }
      return null;

}

export default MyAccountAccordianForm