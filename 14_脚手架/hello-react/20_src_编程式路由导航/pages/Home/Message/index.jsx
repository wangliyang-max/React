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
  replaceShow = (id, title)=>{
    // replace + params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // replace + query参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
     // replace + state参数
    this.props.history.replace(`/home/message/detail`, {id, title})
  }
  pushShow = (id, title)=>{
    // push + params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // push + query参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    // push + state参数
    this.props.history.push(`/home/message/detail`, {id, title})
  }
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
    const {messageArr} = this.state
    return (
    <div>
        <ul>
          {
            messageArr.map((message) => {
              return (
                <li key={message.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}
                  
                  {/* 向路由组件传递search(query)参数 */}
                  {/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}

                  {/* 向路由传递state参数 */}
                  <Link to={{pathname:'/home/message/detail', state:{id:message.id, title:message.title }}}>{message.title}</Link>&nbsp;&nbsp;

                  <button onClick={()=>this.pushShow(message.id, message.title)}>push查看</button>&nbsp;&nbsp;
                  <button onClick={()=>this.replaceShow(message.id, message.title)} >replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 注册路由 */}
        {/* 接收路由组件传递的params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* search参数无需接受 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* state参数无需接受 */}
        <Route path="/home/message/detail" component={Detail}/>

        <button onClick={this.back}>后退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>前进2步</button>

      </div>
    )
  }
}
