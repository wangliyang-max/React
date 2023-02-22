import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import Routes from './routers/index'

import Header from "./components/Header"
export default function App() {
  // 根据路由表生成对应的路由
  const elements = useRoutes(Routes)
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                  <NavLink className="list-group-item" end to="/home">Home</NavLink>
                  <NavLink className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 对router5来说 路由注册在哪页面就呈现在哪 */}
                {elements}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

