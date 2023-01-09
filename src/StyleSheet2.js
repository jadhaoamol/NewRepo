import React, { Component } from 'react'
//import './StyleSheet2.css'
import Style from './StyleSheet2.module.css'
export default class StyleSheet2 extends Component {
  render() {
    return (
      <div>
        <h1 className={Style.heading}>my name is mohamad Adil</h1>
      </div>
    )
  }
}
