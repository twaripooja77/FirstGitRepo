import React, { Component } from 'react'

export default class Child extends Component {
  
  componentWillUnmount(){
    alert("The component name child is about to be unmounted.");
  }
    render() {
        console.log(this.countdown)
    return (
        
      <div>
        {this.props.countdown}
        <h1>Hello JS!</h1>
      </div>
    )
  }
}
