import React, { Component } from 'react'
//import './StyleSheet1.css'

import Style from './StyleSheet1.module.css'
export default class StyleSheet1 extends Component {
  render() {
    return (
      <div>
        <h1 className={Style.heading}>Hello, Welcome to learning Never end</h1>
      </div>
    )
  }
}
