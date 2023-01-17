import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Header from "./components/Header"
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                    {/* 标签体中的内容会作为children属性传递给组件 */}
                  <MyNavLink to="/home">Home</MyNavLink>
                  <MyNavLink to="/about">About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
