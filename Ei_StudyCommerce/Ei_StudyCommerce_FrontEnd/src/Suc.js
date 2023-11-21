import React, { Component } from "react";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Success!",
    };
  }

  componentDidMount() {
    // Perform any additional setup or actions after the component mounts
    console.log("Success component mounted");
  }

  componentWillUnmount() {
    // Perform cleanup or actions before the component unmounts
    console.log("Success component will unmount");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This is the success page content.</p>
      </div>
    );
  }
}

export default Success;
