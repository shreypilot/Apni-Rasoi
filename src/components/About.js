import React, { Component } from 'react';
import Profile from './ProfileClass';
export class About extends Component {
  constructor(props){
    super(props);
    console.log("parent - constructor");
  }
  componentDidMount(){
    console.log("Parent- componentDidMount")
  }
  componentWillUnmount(){
    console.log("componenetwillunmount")
  }
  render() {
    console.log("Parent- render")
    return (
      
    <div>
        
        <h1>About page</h1>
    <p>
        {" "}
        This is The Namaste React Live Course
     </p>
     <h1>About page</h1>
    <p>
        {" "}
        This is The Namaste React Live Course
     </p>
     <h1>About page</h1>
    <p>
        {" "}
        This is The Namaste React Live Course
     </p>
     <h1>About page</h1>
    <p>
        {" "}
        This is The Namaste React Live Course
     </p>
     <Profile name={"shreya"} />
    </div>
    
    )
  }
}

export default About





