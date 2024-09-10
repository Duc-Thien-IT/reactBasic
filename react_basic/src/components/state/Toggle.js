import React, { useState } from 'react';
import "./ToggleCss.css";

function Toggle () {
    //1. Enabling state: useState(initialize value)
    //2. Initialize state: useState(false) 
    //3. reading state: 
    //4. update state

    const [on, setOn] = useState(false);
    console.log(on);

    const handleToggle = () => {
        setOn((on) => !on);
    }

    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "spinner active" : ""}`}></div>
            </div>
            {/* <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
            </div> */}
        </div>
    );
}

export default Toggle;