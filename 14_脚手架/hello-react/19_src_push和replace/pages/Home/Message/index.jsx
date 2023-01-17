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

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}

                  {/* 向路由传递state参数 */}
                  {/* <Link replace={true} to={{pathname:'/home/message/detail', state:{id:message.id, title:message.title }}}>{message.title}</Link>&nbsp;&nbsp; */}
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 注册路由 */}
        {/* 接收路由组件传递的params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>

        {/* search参数无需接受 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* state参数无需接受 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
      </div>
    )
  }
}
