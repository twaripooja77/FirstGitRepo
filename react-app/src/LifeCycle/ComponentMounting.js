import React, { Component } from 'react'

export default class ComponentMounting extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Binja"
        }
        
        }
        static getDerivedStateFromProps(props,state){
            return{
                name2:props.name1
            }
    }
    componentDidMount(){
        setTimeout(()=>{
this.setState({name:"Binaya"})
        },3000)
    }
    
  render() {
    console.log(this,"this")
    return (
      <div>
        Component Mounting
        {this.state.name}
      </div>
    )
  }
}
