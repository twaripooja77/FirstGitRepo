import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        alert("your component is about to be unmounted");
    }
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    )
  }
}
