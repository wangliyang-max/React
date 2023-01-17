import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  go = ()=>{
    this.props.history.go(2)
  }
  render() {
    // console.log('Header接收到的属性是', this.props);
    return (
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                  <h2>React Router Demo</h2>
                  <button onClick={this.back}>后退</button>
                  <button onClick={this.forward}>前进</button>
                  <button onClick={this.go}>前进2步</button>
                </div>
            </div>
        </div>
    )
  }
}

export default withRouter(Header)
// withRouter可以加工一般组件，让一般组件具备路由组件特有的API（props.history等）