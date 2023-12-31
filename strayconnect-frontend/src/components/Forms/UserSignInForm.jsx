import React from 'react'
import { useState, useEffect } from 'react'
import "./Form.css"
import "../../Global.css"
import { Link } from 'react-router-dom'
import { validFormInput, validateErrorFields } from '../../utils/utilityFunctions'
import axiosInstance from '../Axios'
import LoadingButton from '../LoadingButton/LoadingButton'
import { useNavigate } from 'react-router-dom'


const UserSignInForm = () => {
    const navigate = useNavigate();
    const [fName, setfName] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [city, setcity] = useState('')
    const [street, setstreet] = useState('')
    const [password, setpassword] = useState("")
    const [fnameError, setfnameError] = useState("")
    const [lnameError, setlnameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [phoneError, setphoneError] = useState("")
    const [cityError, setcityError] = useState("")
    const [streetError, setstreetError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [isApiInProgress, setisApiInProgress] = useState(false)

   
    const showErrors = () => {
        if(!validFormInput(fName)) setfnameError("Invalid Input")
        if(!validFormInput(lname)) setlnameError("Invalid Input")
        if(!validFormInput(phone)) setphoneError("Invalid Input")
        if(!validFormInput(city)) setcityError("Invalid Input")
        if(!validFormInput(street)) setstreetError("Invalid Input")
        if(!validFormInput(password)) setpasswordError("Invalid Input")
        if(!validFormInput(email) || !validateEmail(email) ) setemailError("Invalid Input")

    }

    const validateEmail = (value) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }


    useEffect(() => {
        if (validFormInput(fName)) setfnameError("")
        if (validFormInput(lname)) setlnameError("")
        if (validFormInput(city)) setcityError("")
        if (validFormInput(phone)) setphoneError("")
        if (validFormInput(street)) setstreetError("")
        if (validFormInput(email)) setemailError("")
        if (validFormInput(password)) setpasswordError("")
    }, [fName, lname, phone, city, email, city, password, street])

    const submitForm = async(e) => {
        e.preventDefault();
        const isInputValid = validFormInput(fName, lname, email, phone, city, street, password)
        
        if(!isInputValid || !validateEmail(email)){
            showErrors();
            return;
        }

        if (!validateErrorFields(fnameError, lnameError, passwordError, cityError, streetError, phoneError)) {
            return;
        }

        setisApiInProgress(true);
        try {
            const data = {
                "email": email,
                "fname": fName,
                "lname": lname,
                "city": city,
                "street": street,
                "password": password,
                "phone": String(phone)
            }
            axiosInstance.post('/user/add', data).then((res) => {
                if(res.status === 200){
                    setemail("");
                    setphone("")
                    setpassword("")
                    setfName("")
                    setlname("")
                    setcity("")
                    setstreet("")
                    navigate("/")
                }

            }).catch((err) => {
                console.log(err);
            })
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setisApiInProgress(false)
        }

    }


    return (
        <>
            <div className="form-container">
                <h1 className="form-heading">Sign Up</h1>
                <form className="forms">
                    <div className="form-biSnippet">
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">First Name: </label>
                            <input type="text" className="form-input" value={fName} onChange={(e) => { setfName(e.target.value) }} />
                            <span className="form-error"> {fnameError} </span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Last Name: </label>
                            <input type="text" value={lname} onChange={(e) => { setlname(e.target.value) }} className="form-input" />
                            <span className="form-error"> {lnameError} </span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Email: </label>
                            <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="form-input" />
                            <span className="form-error"> {emailError} </span>
                        </div>

                    </div>
                    <div className="form-tri-snippet">
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Password: </label>
                            <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="form-input" />
                            <span className="form-error"> {passwordError} </span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">Phone: </label>
                            <input type="number" className="form-input" value={phone} onChange={(e) => { setphone(e.target.value) }} />
                            <span className="form-error"> {phoneError} </span>
                        </div>
                        <div className="form-snippet">
                            <label htmlFor="" className="form-label">City: </label>
                            <input type="text" value={city} onChange={(e) => { setcity(e.target.value) }} className="form-input" />
                            <span className="form-error"> {cityError} </span>
                        </div>
                    </div>
                    <div className="form-snippet">
                        <label htmlFor="" className="form-label">Street: </label>
                        <input type="text" className="form-input" value={street} onChange={(e) => { setstreet(e.target.value) }} />
                        <span className="form-error"> {streetError} </span>
                    </div>
                    <button className="form-button" onClick={(e) => submitForm(e)} >
                        {
                            isApiInProgress ? <LoadingButton /> :  "Sign Up"
                        }
                    </button>
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