import React, { Component, lazy, Suspense } from 'react'
import {  NavLink, Route, Routes } from 'react-router-dom'

// import About from './About/index.jsx'
// import Home from './Home'
// fallBack指向的组件必须不是使用懒加载进行加载的组件
import Loading from "./Loading"
const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))

  
export default class Demo extends Component{
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className = "page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                  <NavLink className="list-group-item" to="/about">About</NavLink>
                  <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* v6版本的router需要添加父组件<Routes>,注册写法也和v5不同 */}
                {/* fallback={<h1>Loading......</h1>} 对应的是懒加载没加载出来的时候显示的内容 */}
                <Suspense fallback={<Loading/>}>
                  <Routes>
                    <Route element={<Home />} path="/home"></Route>
                    <Route element={<About />} path="/about"></Route>
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
