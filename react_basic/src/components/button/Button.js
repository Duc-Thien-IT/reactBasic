import React from 'react';
import "./Button.scss";
//import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={`button ${props.className || ""}`}>
            {props.children}
        </button>
    );
};

export default Button;