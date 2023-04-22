import React, { Component } from 'react'

export default class ComponentUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Java"
        }
    }
    
    shouldComponentUpdate(){
        return true; //by default true hunxa
    }
    
    changename=()=>{
        this.setState({name:"Python"})
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
document.getElementById("div1").innerHTML="Before:"+prevState.name;

    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML="After:"+this.state.name;
    }
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.changename}>Change Name</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>

    )
  }
}
