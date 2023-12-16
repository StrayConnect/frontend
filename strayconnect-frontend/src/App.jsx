import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UserSignInForm from './components/Forms/UserSignInForm'
import LogInForm from './components/Forms/LogInForm'
import DoctorForm from './components/Forms/DoctorForm'
import RescuerForm from './components/Forms/RescuerForm'
import CustomDropDown from './components/CustomDropDown/CustomDropDown'

const App = () => {
  return (
    <>
    <Routes >
      <Route path='/signup' element = { <UserSignInForm /> } />
      <Route path='/test' element = { <CustomDropDown /> } />
      <Route path='/logIn' element = { <LogInForm /> } />
      <Route path='/doctor/signUp' element = { <DoctorForm /> } />
      <Route path='/rescuer/signUp' element = { <RescuerForm /> } />
    </Routes>
    </>
  )
}

export default App