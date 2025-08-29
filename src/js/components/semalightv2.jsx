import React from "react";


const Lightv2 = ({ color, active }) => {


    return (
        <div className={` light rounded rounded-5 bg-${color} border ${active && "glow"} `}></div>
    )

}

export default Lightv2