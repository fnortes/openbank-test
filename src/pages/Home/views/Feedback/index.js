import React, { Component } from "react";

import success from './success.png';
import error from './error.png'

class Feedback extends Component {
  render() {
    return <img src={this.props.success ? success : error} alt="" />
  }
}

export default Feedback;