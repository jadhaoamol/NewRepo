import React from 'react'

const Home = (props) => {
  return (
    console.log(props),
      <div className="new">
        <h1>Hello, {props.name} age={props.age} is married : {props.isMarried.toString()} </h1>
        <h3>Array Elements are : {props.arr}</h3> 
      </div>
   
  )
}

export default Home
