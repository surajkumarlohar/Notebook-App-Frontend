import React from 'react';

function Alert(props) {
    const capitalize = (word)=>{
        if(word==='danger'){
            word = "Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: `60px`}}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert
