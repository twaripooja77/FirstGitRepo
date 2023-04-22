import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.interval=setInterval(()=>{
            this.setState(prevState=>(
                {
                    count:prevState.count+1
                }
            )
               
            )
        },1000)
    }
    decrement=()=>{
        this.interval=setInterval(()=>{
            this.setState(prevState=>({
                count:prevState.count-1
            }))
        },1000)
    }
    
    startIncrement=()=>{
        clearInterval(this.interval)
this.increment();
    }
    startDecrement=()=>{
clearInterval(this.interval)
this.decrement();
    }
    stopCount=()=>{
clearInterval(this.interval)

    }
  render() {
    console.log(this,"hello i am this")
    return (
      <div>
       <ChildComponent>
        {this.state.count}
       </ChildComponent>
        <button onClick={this.startIncrement}>Start Increment</button>
        <button onClick={this.startDecrement}>Start Decrement</button>
        <button onClick={this.stopCount}>Stop</button>
      
      </div>
    )
  }
}
