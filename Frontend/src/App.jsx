import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Output from './components/Output'
import { useState } from 'react'

const App = () => {

  const [result, setResult] = useState(null)

  return (
    <div className="">
      <Navbar />
      <Form setResult={setResult}/>
      <Output result={result}/>
    </div>
  )
}

export default App