import React from 'react'
import { useState, useEffect } from 'react'
import "./Form.css"
import "../../Global.css"
import { Link } from 'react-router-dom'
const UserSignInForm = () => {


    // Add API Call
    return (
        <>
            <div className="form-container">
                <form className="forms">
                    <div className="form-biSnippet">
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">First Name: </label>
                            <input type="text" className="form-input" />
                            <span className="form-error"></span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Last Name: </label>
                            <input type="text" className="form-input" />
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-tri-snippet">
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Email: </label>
                            <input type="text" className="form-input" />
                            <span className="form-error"></span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Phone: </label>
                            <input type="text" className="form-input" />
                            <span className="form-error"></span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">City: </label>
                            <input type="text" className="form-input" />
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-snippet">
                        <label htmlFor="" className="form-label">Street: </label>
                        <input type="text" className="form-input" />
                        <span className="form-error"></span>
                    </div>
                    <button className="form-button">Sign Up</button>
                    <span className="form-caption">Already have an account? 
                     <Link className='form-caption-link' to={'/logIn'} > LogIn</Link>
                     </span>
                <div className="form-biSnippet">
                    <button className="info-button">Doctor SignUp</button>
                    <button className="info-button">Rescuer SignUp</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default UserSignInForm