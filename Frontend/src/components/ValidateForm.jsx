import React, { useState } from 'react'
import { Search } from 'lucide-react'
import axios from 'axios'

const ValidateForm = (props) => {

    const [formData, setFormData] = useState({ url: "" })
    const [loading, setLoading] = useState(false)

    const formSubmit = async (e) => {
        e.preventDefault();
        if (!formData.url.trim()) return;

        setLoading(true);
        props.setDnsData(null); // Purana data clear karo

        try {
            // 1. Pehle DNS Validate karo
            // const res = await axios.post('/api/domain/finddomain', { domain: formData.url });
            const res = await axios.post('/api/domain/finddomain', { domain: formData.url });

            // Agar success hua, toh UI mein data dikhao
            props.setDnsData(res.data);
            setFormData({ url: "" }); // ✅ Sirf success hone par form clear karo

            // 2. Ab Data Save karo (Agar save fail bhi ho jaye, toh UI kharab na ho)
            try {
                const saveRes = await axios.post('/api/users/saveData', {
                    url: res.data.domain,
                    status: res.data.status,
                    latency: res.data.latency,
                    cpuUsed: Number(res.data.cpuUsed),
                    memoryUsed: Number(res.data.memoryUsed)
                });
                console.log("✅ Data Saved Successfully");
                console.log(saveRes.data);

                if (props.setRefreshHistoryData) {
                    props.setRefreshHistoryData((prev )=> prev + 1);
                }

            } catch (saveErr) {
                console.log("❌ Save Data Error (500):", saveErr.response?.data || saveErr.message);
            }

            // try {
            //     const getAllData = await axios.get('/api/users/getAllData');
            //     props.setHistoryData(getAllData.data);
            // }catch(historyErr){
            //     console.log("❌ Save Data Error (500):", historyErr.response?.data || historyErr.message);
            // }

        } catch (err) {
            // Agar BOGUS domain aaya, toh yahan aayega (400 error)
            if (err.response && err.response.data) {
                props.setDnsData(err.response.data);
                // ✅ BOGUS aane par input box ko blank mat karo, taaki user sudhar sake
            }
        } finally {
            setLoading(false);
        }
    }

    const formHandeler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log(e.target.value)
    }

    return (
        <div className="w-[90%] md:w-[80%] mx-auto my-10 py-4 border  border-blue-500/50 rounded-lg p-1.5 shadow-[0_0_15px_rgba(59,130,246,0.15)]">

            <form onSubmit={(e) => { formSubmit(e) }} className="flex flex-col md:flex-row items-center justify-between gap-4 w-full px-2">

                <div className="w-full md:w-[80%] rounded-2xl border bg-[#071948] flex h-16 items-center gap-4">
                    <Search className='ml-4' />
                    <input onChange={(e) => { formHandeler(e) }} value={formData.url} name="url" className="focus:outline-none focus:ring-0 focus:border-blue-500/50 w-[90%]" type="text" placeholder='e g, example.com, iot.device.local' />
                </div>

                <button className="w-full md:w-auto px-8 py-3 md:py-4 text-[18px] rounded-xl font-bold text-black bg-linear-to-r from-[#00FFD1] to-[#00B3FF] shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:scale-105 transition-transform">
                    Validate
                </button>

            </form>

        </div>
    )
}

export default ValidateForm