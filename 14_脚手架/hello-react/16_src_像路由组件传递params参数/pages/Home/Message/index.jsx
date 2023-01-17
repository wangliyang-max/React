import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
   messageArr: [
    {id:'001', title:'消息1'},
    {id:'002', title:'消息2'},
    {id:'003', title:'消息3'}
   ]   
  }
  render() {
    const {messageArr} = this.state
    return (
    <div>
        <ul>
          {
            messageArr.map((message) => {
              return (
                <li key={message.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 注册路由 */}
        {/* 接收路由组件传递的params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
      </div>
    )
  }
}
