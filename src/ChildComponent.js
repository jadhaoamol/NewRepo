//----------- Class component --------------------

// import React, { Component } from 'react'

// export default class ChildComponent extends Component {
//     render() {
//         return (
//             // <div>
//             //     <button onClick={this.props.callMethod}>Click me</button>
//             // </div>
//             <div>
//                 <button onClick={()=>this.props.callMethod("Amol","Jadhao")}>Click me</button>
//             </div>
//         )
//     }
// }

//----------- Function Component ----------------

import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.callMethod("Amol", "Jadhao")}>Click me</button>
        </div>
    )
}

