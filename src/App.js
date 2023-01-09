
import './App.css';
// import Home from './Home'
// import Person from './Person'
// import PropTypes from 'prop-types';  //impt shot cut
// import Employee from './Employee';
// import Customer from './Customer'
// import PrarentComponent from './PrarentComponent';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import StyleSheet from './StyleSheet'
// import StyleSheet1 from './StyleSheet1';
// import StyleSheet2 from './StyleSheet2';
// import USWithObject from './USWithObject';
// import USWithArraylist from './USWithArraylist';
import ClassState from './ClassState';
import FunctionState from './FunctionState';



function App() {
  // let a = "Amol";
  // let b = "Vaibhav";
  //const friends=["A","B","C"]

  // const name = "amol";
  // if (name === "amol") {
  //   return <Component1 />
  // }
  // else {
  //   return <Component2 />
  // }

  // const name = "amol";
  // let data;
  // if (name === "amol") {
  //   data = <Component1 />
  // }
  // else {
  //   data = <Component2 />
  // }
  return (
    //data
    // <div className="App">
    //   <Home name="Amol" age={27}><p>Child element 1</p></Home>
    //   <Home name="Vaibhav" age={29}><button type='button'>Click me</button></Home>
    //   <Home name="Santosh" age={28}><h1>child element 2</h1></Home>
    //   <Person/>
    // </div>
    // <div className="App">
    //   <Home name="Amol" age={29} isMarried={false} arr={friends}/>
    //   <Home name="Vaibhav" age={30} isMarried={true}/>
    //   <Home name="Santosh" age={28} isMarried={false}/>
    //   <Person/>
    // </div>
    // <Employee/>
    // <Customer name="santosh"/>
    //<PrarentComponent/>
    //   <>
    //     if(name == "amol"){
    //  return <Component1 />
    // }
    //     else{
    //   return<Component2 />
    // }</>

    // <StyleSheet active={true} />
    // <StyleSheet1 />
    // <StyleSheet2 />
    //<USWithObject/>
    //<USWithArraylist/>
    <>
    <ClassState/>
    <FunctionState/>

    </>
  );


}


// PropTypes
// App.propTypes ={
//   name:PropTypes.string.isRequired,
//   age:PropTypes.number,
//   isMarried:PropTypes.bool,
//   arr:PropTypes.array
// }

// App.defaultProps ={
//   name:"Anonymous",
//   age:18,
//   isMarried:false
// }
export default App;
