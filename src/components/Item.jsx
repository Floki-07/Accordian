import { Children } from "react";
import { useState } from "react";


export default function Item({ num, title, text, curOpenNum, Onopen, children }) {
    const open = num === curOpenNum; //check 
    console.log(num, open);
    const handleClick = () => {
        Onopen(open ? null : num);
        // if(num===curOpenNum) Onopen(null)
    }

    return <div
        className={`item ${open ? 'open' : ''}`}
        onClick={handleClick}>

        <p className="number"> {num < 9 ? `0${num}` : num}</p>
        <p className="title"> {title}</p>
        <p className="icon">{open ? '-' : '+'}</p>
        {open &&
            <>
                <div className="content-box">
                    <ul>
                        {children}
                    </ul>
                </div>
            </>
        }


    </div>
}