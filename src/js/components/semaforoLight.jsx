import React from "react";


const Light = ({ color, active }) => {


    return (
        <div className={` light rounded rounded-5 bg-${color} border ${active === color && "glow"} `}></div>
    )

}

export default Light