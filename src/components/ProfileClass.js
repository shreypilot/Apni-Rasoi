import React, { Component } from 'react'

export class ProfileClass extends Component {
  constructor(){//create a constructor
    super();
    this.state = {//createa state variable inside child
      userInfo:{
        name:"shreya",
        Location: "bangalore",
    },
    count : 0 //what if there ar multiple state variable
  };
  console.log("child-constructor")//play with console log for each lifecycle method
}
componentDidMount(){
  this.timer = setInterval(() => {//create interval inside componentDidMount
    console.log("Namaste op")
  },5000)
  console.log("child componentDidMount");
}
componentWillUnmount(){
  clearInterval(this.timer);//use clearInterval to fix the issue caused by timer interval
  console.log("child componentWillUnmount")
}

  render() {
    console.log("child-render")
    return (
      <div>
        <h1>tis is Restaurant</h1>
        
        <h1>name:{this.props.name}</h1>{/** pass props from parent to it(child)*/}
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Location : {this.state.userInfo.Location}</h3>
        <h4>count : {this.state.count}</h4>
        <button onClick={() =>{
          this.setState({//use this.setState to update it
             count:1
          });
          
        }}>count</button>
      </div>
    )
  }
}

export default ProfileClass;
