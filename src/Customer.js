//******************** Call Event using Function Component --------------------

// import React from 'react'

// function Customer() {
//     function Show(){
//         alert("Show function Called");
//     }
//   return (
//     <div className='App'>
//       <h1>Hello World</h1>
//       <input type="button" value="Click" onClick={Show} />
//     </div>
//   )
// }
// export default Customer


//*********************  Call Event using Class Component -----------------
// import React, { Component } from 'react'

// export default class Customer extends Component {
//     Show(){
//         alert("Class Show Function Called");
//     }
//   render() {
//     return (
//       <div className='App'>
//         <input type="button" value="Click" onClick={this.Show} />
//       </div>
//     )
//   }
// }

//------------  passing Value to Arrow Fun as parameter -------

// import React from 'react'

// function Customer(prop) {
//     const Show = (name) => {
//         alert("Hello," + name);
//     }
//     return (
//         <div className='App'>
//             <input type="button" value="Click" onClick={() => Show(prop.name)} />
//         </div>
//     )
// }

// export default Customer


//------------  passing Value to Class Components as parameter -------
import React, { Component } from 'react'

export default class Customer extends Component {
    // In side render we call arrow function thats why we dont need to write onClick={()=>this.show} 
  render() {       
    const show=(name)=>{
        alert("Hellow" +" "+ name);
    }
    return (
      <div className='App'>
        <input type="button" value="Click" onClick={()=>show("Tushar")} /> 
        // <input type="button" value="Click" onClick={()=>show(this.props.name)} />  //call props
      </div>
    )
  }
}





