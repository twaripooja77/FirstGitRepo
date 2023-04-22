import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={name:"java"}
    }
    // static getDerivedStateFromProps(props, state){
    //   return{name:props.name1};
    // }

    //THe componentDidMount() method is called after the component is rendered.
    
// componentDidMount(){
//       setTimeout(()=>{
//         this.setState({name:"python"});
//       },8000);
//     }
//should component update
shouldComponentUpdate(){
  return true;   //by default true hunxa
 }

//function to change  name
// changeName=()=>{
//   this.setState({name:"Python1"});
// };
//can access the values of previous state and props
// getSnapshotBeforeUpdate(prevProps, prevState)
// {
//   document.getElementById("div1").innerHTML="Before:"+ prevState.name;
// }

//component did update
// componentDidUpdate(){
//   document.getElementById("div2").innerHTML="After:"+this.state.name;
// }
  render() {
console.log(this,"this")
    return (
      <div>
        {this.state.name}
        <button onClick={this.changeName}>Change Name</button>
        <div id='div1'></div>
        <div id='div2'></div>
      </div>
    )
  }
}
