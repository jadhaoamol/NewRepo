import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class PrarentComponent extends Component {
    parentMethod = (name, lastname) => {
        alert("parentMethod Called.. " + name + " " + lastname);
       // alert("parentMethod Called.. Name is = ${name} and last name is = {lastname}"); // template littral means place holder Syntex
       
       
    }

    render() {
        return (
            <div>
                <ChildComponent callMethod={this.parentMethod} />
            </div>
        )
    }
}
