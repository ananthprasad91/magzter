import React from "react";

export default function TextInput(props) {
    return (
        <input 
            class="un" 
            type={props.type ? props.type : "text"} 
            align="center" 
            placeholder={props.placeholder} 
            onChange={props.onChange} 
            value={props.value} />
    )
}