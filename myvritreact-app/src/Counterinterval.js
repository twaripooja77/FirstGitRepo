import React, { Component } from 'react'
import Child from './Child';


export default class Counterinterval extends Component {
   constructor(props){
    super(props);
    this.state={
        count:0,
    };
   }

   increment=()=>{
    this.interval=setInterval(()=>{
        this.setState((prevState)=>({
            count: prevState.count+1,

        }))
    },1000);
   }

   decrement=()=>{
    this.interval=setInterval(()=>{
        this.setState((prevState)=>({
            count: prevState.count-1,

        }))
    },1000);
   }

   
   startIncrement=()=>{
    clearInterval(this.interval)
        this.increment();
   }

   
   startDecrement=()=>{
    clearInterval(this.interval)
        this.decrement();
   }

   stop=()=>{
    clearInterval(this.interval);
}
   
  render() {
    console.log(this,"this");
    return (
        
      <div>
        

         <span className="counter">{this.props.children}</span><br></br>
        <span className="counter">{this.state.count}</span>
        <button className='button1' onClick={this.startIncrement}>Increment</button>
        <button className='button2' onClick={this.startDecrement}>Decrement</button>
        <button className='button3' onClick={this.stop}>Stop</button>
        <Child countdown={this.state.count}/>


      </div>
    )
  }
}
