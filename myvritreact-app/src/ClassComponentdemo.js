import React, { Component } from 'react'

export default class ClassComponentdemo extends Component {
//state full component

  constructor(props) {
    super(props);
    //this.changeName=this.changeName.bind(this);
    this.state={
        fullName:"Pooja Tiwari",
    };
  }
  changeName=()=>{
    console.log(this,"this");
    this.setState({fullName:"Test Name"})
  }
  render(){
    return (
        //react fragment <React.Fragment> bhanera pani lekhna milxa 
    <>   
    <div>{this.state.fullName}</div>
    <button onClick={this.changeName}>Change Me </button>
     </>
    
    

    )
  }
}


