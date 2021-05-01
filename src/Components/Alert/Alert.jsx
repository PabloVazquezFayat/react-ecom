import './Alert.css';
import React, { useState, useEffect } from 'react';

export default function Alert(props) {

    const {alert, setAlert} = props;
    const [toggle, setToggle] = useState('none');

    const handleClick = ()=> {
        setAlert(false);
    }

    useEffect(()=> {
        if(alert ===  true){
            setToggle('flex');
        }else{
            setToggle('none');
        }
    }, [alert]);
 
    return (
        <div className="alert-container" style={{display: toggle}}>
            <div className="alert-body">
                <h1>Alert</h1>
                <p>{props.children}</p>
                <button type="button" onClick={handleClick}>Okay</button>
            </div>
        </div>
    )
}
