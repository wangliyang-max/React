import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err:'',//请求相关的错误信息
  }
  updataAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    const {users} = this.state
    return (
      <div className="container">
        <Search updataAppState={this.updataAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
