import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UserSignInForm from './components/Forms/UserSignInForm'

const App = () => {
  return (
    <>
    <Routes path= '/doctor' >
      <Route path='/test' element = { <UserSignInForm /> } />
    </Routes>
    </>
  )
}

export default App