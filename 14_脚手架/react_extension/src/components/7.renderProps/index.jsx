import React, { Component } from 'react'

const MyContext = React.createContext()

export default class A extends Component {
    state = {username:'yang', age:18}
  render() {
    const {username} = this.state
    return (
      <div style = {{width:'500px',background:'orange',padding:'8px'}}>
        <div>A组件</div>
        <h4>用户名：{username }</h4>
        {/* 组件标签体中的内容作为props的children属性传递给B组件 */}
        {/* <B>
          <C/>
        </B> */}
        {/* render可以接受到从B组件的传递的this.props.render参数 */} 
        <B render={(name)=><C name={name}/>}/>
      </div>
    )
  }
}

class B extends Component {
    state = {name:'Tom'}
    render() {
        const {name} = this.state
      return (
      <div style={{width:'100%',background:'pink',padding:'8px'}}>
          <div>B组件</div>
          <h4>从A接受的用户名：
            {/* render属性中内容展示位置 */}
            {/* 将B组件的name传递给render中的回调函数 */}
            {this.props.render(name)}
          </h4>
        </div>
      )  
    }
}


class C extends Component {
    render() {
        return (
        <div style={{width:'100%',background:'yellow',padding:'8px'}}>
            <div>C组件：{this.props.name}</div>
        </div>
        )
    }
}

