const LeftOutput = (props) => {

    let hasIp = Boolean(props?.data?.ip[0] || props?.data?.ip);

    return (
        <div className="w-[50%] bg-gray-200">
            <div className="flex my-6 justify-center">
                <h3 className="text-2xl font-medium mr-28">Status</h3>
                <div className="flex gap-10 mt-2">
                    <div className={`w-5 h-5 rounded-full border border-black ${hasIp ? "bg-green-600" : "bg-white"}`}></div>
                    <div className={`w-5 h-5 rounded-full border border-black ${!hasIp ? "bg-red-700" : "bg-white"}`}></div>
                    <div className="YellowLight w-5 h-5 rounded-full bg-white border border-black"></div>
                </div>
            </div>
            <div className="flex mb-6 justify-center">
                <h3 className="text-2xl font-medium mr-20">IP Address</h3>
                <h3 className="text-1.5xl text-center w-45 h-7 mt-1 border border-black bg-gray-200">{props?.data?.ip[0] || props?.data?.ip}</h3> 
            </div>
        </div>
    )
}

export default LeftOutput