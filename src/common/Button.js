import React from "react";

export default function Button(props) {
    return (
        <input 
            class={props.btnType} 
            align="center"
            type="button"
            onClick={props.onClick} 
            value={props.value} />
    )
}