import React, { useState } from "react";
import Lightv2 from "./semalightv2";


const Semav2 = () => {

    const [lights, setLights] = useState({
        danger: false,
        warning: false,
        success: false
    })
    const [purple, setPurple] = useState(false)
    const handleClick = (color) => {
        setLights({
            danger: color === 'danger',
            warning: color === 'warning',
            success: color === 'success',
            info: color === 'info'
        })
    }

    return (

        <div className="bg-dark">
            <button className="btn btn-primary"
            onClick={()=>setPurple(!purple)}
            >
                purple
            </button>
            <div
                onClick={() => handleClick('danger')}
            >
                <Lightv2
                    color={'danger'}
                    active={lights.danger}
                />
            </div>
            <div
                onClick={() => handleClick('warning')}
            >
                <Lightv2
                    color={'warning'}
                    active={lights.warning}
                    onClick={handleClick}

                />
            </div>
            <div
                onClick={() => handleClick('success')}
            >
                <Lightv2
                    color={'success'}
                    active={lights.success}
                    onClick={handleClick}

                />
            </div>
            {
                 purple && <div
                onClick={() => handleClick('info')}
            >
                <Lightv2
                    color={'info'}
                    active={lights.info}
                    onClick={handleClick}

                />
            </div>
            }
        </div>
    )
}

export default Semav2