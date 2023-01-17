import React, { Component } from 'react'
import {  NavLink, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Header from "./components/Header"
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                  <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink>
                  <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
