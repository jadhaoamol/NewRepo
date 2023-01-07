import Home from './Home'
import Person from './Person'
import './App.css';
import PropTypes from 'prop-types';  //impt shot cut
import Employee from './Employee';
import Customer from './Customer'
import PrarentComponent from './PrarentComponent';



function App() {
  // let a = "Amol";
  // let b = "Vaibhav";
  //const friends=["A","B","C"]
  return (
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
    <PrarentComponent/>
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
