import React from "react";
import './AminSta.css'

const ServiceReport = () => {
    return (
        <div className="bg-white w-full">
            <div className="h-5 w-full border-red-100 pl-20 pr-20 flex">
                <h1 className="text2 font-bold">Service Report</h1>
                <button style={{ 
                    border: '2px solid #dfaf36', 
                    borderRadius: '30px', 
                    padding: '5px 10px' 
                }}>
                    NGO
                </button>
            </div>
        </div>
    );
};

export default ServiceReport