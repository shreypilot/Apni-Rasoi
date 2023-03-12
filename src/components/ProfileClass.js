import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import { Github_API_User, Github_UserName, options } from "../constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
    // console.log("Profile-Parent constructor");
  }
  
  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const {userInfo} = this.state; // object destructuring for json data
    // console.log("Profile-Parent - render");
    return (
      <div className="profile-class-container">
        <div className="flex flex-col box-border shadow-slate-400 border-black">
          <h1 className=" font-extrabold text-center text-2xl  ">About Me</h1>
          <ProfileUserClass data={userInfo} />
          {/* Passing props data (full json data) from parent to child */}
        </div>
        
      </div>
    );
  }
}

export default Profile;