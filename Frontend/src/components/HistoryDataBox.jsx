import React, { useEffect, useState } from 'react';
import HistoryData from './HistoryData';
import axios from 'axios';

const HistoryDataBox = (props) => {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchHistory = async () => {
      try {

        const res = await axios.get('/api/users/getAllData');
        let data = res.data.allValidateData
        
        if(props.limit){
          data = data.slice(0, props.limit);
        }

        setHistory(data);
        setLoading(true);

      } catch (err) {
        console.log("Error fetching history:", err);
      }finally{
        setLoading(false)
      }
    };
    fetchHistory();
  }, [props.refreshHistoryData]);

  return (
    <div className="w-full bg-[#1c243d] flex flex-col mt-10">
        <div className="w-full flex text-[20px] font-medium text-blue-300/60 border-y py-3 border-blue-950">
          <h1 className="w-[8%] text-center">SN No.</h1>
          <h1 className="w-[20%] text-center">Domain</h1>
          <h1 className="w-[20%] text-center">Status</h1>
          <h1 className="w-[12%] text-center">Latency</h1>
          <h1 className="w-[10%] text-center">CPU Used</h1>
          <h1 className="w-[10%] text-center">Memory Used</h1>
          <h1 className="w-[20%] text-center">Timestamp</h1>
        </div>
        
        {/* ✅ Data ko child component mein map karke bhejo */}
        <HistoryData history={history} />
    </div>
  )
}

export default HistoryDataBox;