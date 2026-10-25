import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Output from './components/Output'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Validate from './components/Validate'

const App = () => {

  const [result, setResult] = useState(null)

  return (
    <div className="">
      {/* <Navbar />
      <Form setResult={setResult} />
      {result !== null && (
        <Output result={result} />
      )} */}

      {/* <LandingPage /> */}

      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/validate' element={<Validate />}/>
      </Routes>





    </div>
  )
}

export default App