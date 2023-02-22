import React, { Component } from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Header from "./components/Header"

function activeClass({isActive}){
    return isActive?"list-group-item my-active" : "list-group-item"
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                    {/* 标签体中的内容会作为children属性传递给组件 */}
                  <NavLink className={activeClass} to="/home">Home</NavLink>
                  <NavLink className={activeClass} to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由, Router6将switch替换为Routes,并且必须使用Routes包裹 */}
                <Routes>
                  {/* 将Router6将component替换为element */}
                  <Route path="/About" element={<About/>}/>
                  <Route path="/home" element={<Home/>}/>
                  {/* 重定向 */}
                  <Route path="/" element={<Navigate to="/about"/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

