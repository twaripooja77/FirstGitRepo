import React, { Component } from 'react'
import Child from './Child'
export default class ComponentUnmount extends Component {
  constructor(props){
    super(props);
    this.state={showChild:true};
  }
    hideChild=()=>{
        this.setState({showChild:false});
    }  
  
    render() {
        let childElem;
        if(this.state.showChild){
            childElem=<Child/>;
        }
    return (
      <div>
        {childElem}
        <button type='button' onClick={this.hideChild}>
            HideChild
        </button>
      </div>
    )
  }
}
