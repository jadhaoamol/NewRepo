import React, { useState } from 'react'

function USWithArraylist() {
    let num = [11, 22, 33, 44];
    const [number, setNumber] = useState(num);
    // let changeState = () => {
    //     setNumber([55, 66, 77, 88]);
    // }
    let changeState = () => {
        setNumber(previousState => {
            return [
                ...previousState,
                Math.floor(Math.random() * 50)
            ]
        })
    }

    return (
        <div>
            <ul>
                {number.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
            <button onClick={changeState}>ChangeArray Elements</button>
        </div>
    );
}

export default USWithArraylist

