import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({url: ""})

    const formSubmit = (e)=>{
        e.preventDefault();
        if(!formData.url.trim()){
            console.log("URL is Empty");
            return;
        }
        setFormData({url: ""})
    }

    const changeHandeler = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

  return (
    <div className="w-full flex justify-center">
        <form onSubmit={(e)=>{formSubmit(e)}} className="w-120 h-56 rounded-2xl bg-emerald-900 my-20 flex flex-col justify-between">
            <h1 className="text-3xl text-white font-semibold text-center my-3">DNS Form</h1>
            <input onChange={(e)=>{changeHandeler(e)}} value={formData.url} type="url" placeholder='Enter the URL' name="url" className="py-2 mt-5 px-2 bg-white text-black mx-20 rounded" />
            <button className="px-2 py-2 bg-amber-200 mx-40 mb-10 rounded font-medium">Validate DNS</button>
        </form>
    </div>
  )
}

export default Form