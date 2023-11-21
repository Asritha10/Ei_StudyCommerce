import React, { Component } from "react";

class Cancel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Cancellation Page",
    };
  }

  componentDidMount() {
    // Perform any additional setup or actions after the component mounts
    console.log("Cancel component mounted");
  }

  componentWillUnmount() {
    // Perform cleanup or actions before the component unmounts
    console.log("Cancel component will unmount");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This is the cancellation page content.</p>
      </div>
    );
  }
}

export default Cancel;
