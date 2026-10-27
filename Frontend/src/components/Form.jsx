import { useState } from 'react'
import axios from 'axios'
// import https from 'https'    

const Form = (props) => {

    const [formData, setFormData] = useState({ url: "" })
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const formSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.url.trim()) {
            return;
        }

        setLoading(true);
        setTimeout(()=>{
            setMessage("");
        }, 5000);

        try {
            const res = await axios.post('https://localhost:3000/domain/finddomain', { domain: formData.url });

            setMessage(res.data.message);
            props.setResult(res.data);

        }catch(err){
            setMessage(err.response.data.message);
            props.setResult({
                valid: false,
                error: err.response?.data?.message || "Something went wrong!"
            });
        }finally{
            setLoading(false);
            setFormData({ url: "" });
        }
    }

    const changeHandeler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="w-full flex flex-col items-center">
            <form onSubmit={(e) => { formSubmit(e) }} className="w-120 h-52 rounded-2xl bg-emerald-900 my-20 flex flex-col justify-between">
                <h1 className="text-3xl text-white font-semibold text-center my-3">DNS Form</h1>
                <input onChange={(e) => { changeHandeler(e) }} value={formData.url} type="text" placeholder='Enter the URL' name="url" className="py-2 mt-6 px-2 bg-white text-black mx-20 rounded" />
                <button type="submit" className="px-2 py-1.5 bg-amber-200 mx-40 mb-6 rounded font-medium">Validate DNS</button>
            </form>
            <h4 className="text-center -mt-19">{message}</h4>
        </div>
    )
}

export default Form