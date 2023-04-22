import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    console.log(this,"Child Component")
    return (
      <div>
    {this.props.children}
      </div>
    )
  }
}
