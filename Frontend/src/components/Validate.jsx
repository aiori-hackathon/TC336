import React from 'react'
import TopNavbar from './TopNavbar'
import ValidateContent from './ValidateContent'

const Validate = () => {
    return (
        <div className="fixed top-22 w-full">
            <TopNavbar />
            <div className="bg-[#0a1533] relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D] shadow- [0_1px_15px_rgba(0, 255, 157, 0.1)]">
                <ValidateContent />
            </div>

        </div>
    )
}

export default Validate