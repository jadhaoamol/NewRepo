import React, { useState } from 'react'

export default function USWithObject() {
    const obj = {
        name: "Amol",
        age: 29,
        height: 5.6,
        Imarried: false
    }

    const [person, setPerson] = useState(obj)
    let changeState = () => {   
        setPerson(previousState =>{  //when we want to update only single prperty
            return{
                ...previousState,
                name : "Santosh"
            }
        });

        // setPerson({    //when we want to uptate all property
        //     name: "Santosh",
        //     age: 27,
        //     height: 5.4,
        //     Imarried: true
        // })
    }
    return (
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.height}</h1>
            <h1>{person.Imarried.toString()}</h1>
            <input type="button" value="Change State" onClick={changeState} />
        </div>
    )
}
