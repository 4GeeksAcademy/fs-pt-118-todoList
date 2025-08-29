import React, { useState } from "react";
import Light from "./semaforoLight";


const SemaforoHolder = () => {

    const [selected, setSelected] = useState()

    const handleClick = (color) => {
        setSelected(color)
    }

    return (

        <div className="bg-dark">
            <div
                onClick={() => handleClick('danger')}
            >
                <Light
                    color={'danger'}
                    active={selected}
                />
            </div>
            <div
                onClick={() => handleClick('warning')}
            >
                <Light
                    color={'warning'}
                    active={selected}
                    onClick={handleClick}

                />
            </div>
            <div
                onClick={() => handleClick('success')}
            >
                <Light
                    color={'success'}
                    active={selected}
                    onClick={handleClick}

                />
            </div>
        </div>
    )
}

export default SemaforoHolder