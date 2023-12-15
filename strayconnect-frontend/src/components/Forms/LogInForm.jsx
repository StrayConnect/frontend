import React from 'react'
import { useState, useEffect } from 'react'
import "./Form.css"
import "../../Global.css"
import { Link } from 'react-router-dom'
import { validFormInput, validateErrorFields } from '../../utils/utilityFunctions'


const LogInForm = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [emailError, setemailError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [IsAPIinProgress, setIsAPIinProgress] = useState(false)



    useEffect(() => {
      if(validFormInput(email)) setemailError("")
      if(validFormInput(password)) setpasswordError("")
    
    }, [email, password])
    

    // API
    const submitForm = (e) => {
        e.preventDefault();

        if(!validFormInput(email, password)) return;
        if(!validateErrorFields(emailError, passwordError)) return;



    }

    return (
        <>
            <div className="form-container">
                <h1 className="form-heading">Log In</h1>
                <form action="" className="forms">
                    <div className="form-snippet">
                        <label htmlFor="" className="form-label">Email: </label>
                        <input type="email" className="form-input" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <span className="form-error">{emailError} </span>
                    </div>
                    <div className="form-snippet">
                        <label htmlFor="" className="form-label">Password: </label>
                        <input type="password" className="form-input" value={password} onChange={(e) => setpassword(e.target.value)} />
                        <span className="form-error">{passwordError} </span>
                    </div>
                    <button className="form-button" onClick={(e) => {submitForm(e)}} >Log In</button>
                    <span className="form-caption">Create an account?
                        <Link className='form-caption-link' to={'/signUp'} > Sign Up</Link>
                    </span>
                </form>
            </div>
        </>
    )
}

export default LogInForm