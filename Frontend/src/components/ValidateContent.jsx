import React from 'react'
import ValidateForm from './ValidateForm'

const ValidateContent = () => {
  return (
    <div className="w-full  text-white">

        <h1 className="text-white text-3xl mt-10 font-bold mx-16">DNS Validator</h1>
        <p className="text-white text-[16px] font-normal mx-16">Enter a domain name to <span className="text-blue-400">validate </span> its DNSSEC status.</p>

        <ValidateForm />

    </div>
  )
}

export default ValidateContent