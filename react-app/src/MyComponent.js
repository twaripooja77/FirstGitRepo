    import React, { Component } from 'react'
    
    export default class MyComponent extends Component {
        constructor(props){
            super(props);
            this.state={
                fulname:"damon"
            }
        }
        changename=()=>{
            console.log(this,"this")
            this.setState({fulname:"pooja"})
        }
      render() {
        return (
          <div>
           {this.state.fulname}
           <button onClick={this.changename}>Change Name</button>
          </div>
        )
      }
    }
    