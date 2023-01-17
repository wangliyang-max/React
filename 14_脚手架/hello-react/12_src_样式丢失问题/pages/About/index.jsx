import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log("接收到参数：", this.props);
    return (
      <div>About ... </div>
    )
  }
}
