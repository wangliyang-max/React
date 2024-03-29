// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入路由组件
import { BrowserRouter, HashRouter } from 'react-router-dom'
// 引入App组件
import App from './App'

// 渲染App到页面
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>, document.getElementById('root'))

