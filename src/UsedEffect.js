import React, { useEffect, useState } from 'react'

function UsedEffect() {
    const [count, setCount] = useState(0)
    let [name, setName] = useState('amol')
    // useEffect(()=>{
    //     console.log("useEffect Called.."+count);
    // },[]) // 2nd arrgument of useEffect [] array denote it will run only first time renderting of Component (just like Component Dit mount)

    useEffect(() => {
        console.log("useEffect Called.." + count);
    }, [count])  //useEffect will run only when count will Updated

    useEffect(() => {
        console.log("useEffect Name Update.." + name);
    }, [name])    //useEffect will run only when Name will Updated

    useEffect(() => {
        console.log("useEffect Name Update.." + count);
    }, [count,name])  //useEffect will run, when count & Name will Updated
    return (
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={() => setCount(count + 1)}>UpDate</button>
            <button onClick={() => setName("Moni")}>UpDate Name</button>
        </div>
    )
}

export default UsedEffect
