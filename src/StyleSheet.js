import React, { Component } from 'react'
import './StyleSheet.css';
export default class StyleSheet extends Component {
    render() {
        let x = this.props.active ? 'font1' : 'font2'
        return (
            <div>
                <h1 className={`${x} font3`}> Amol jadhao</h1>
            </div>
        )
    }
}
