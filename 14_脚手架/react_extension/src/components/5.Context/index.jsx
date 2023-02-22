import React, { Component } from 'react'

const MyContext = React.createContext()

export default class A extends Component {
    state = {username:'yang', age:18}
  render() {
    const {username,age} = this.state
    return (
      <div style = {{width:'500px',background:'orange',padding:'8px'}}>
        <div>A组件</div>
        <h4>用户名：{username }</h4>
        {/* 子组件通过value将数据进行传递 */}
        <MyContext.Provider value={{username,age}}>
          <B/>
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
    render() {
      return (
      <div style={{width:'100%',background:'pink',padding:'8px'}}>
          <div>B组件</div>
          <h4>从A接受的用户名：{this.props.username}</h4>
          <C/>        
        </div>
      )
    }
  }


//   class C extends Component {
//     // 声明接收祖先组件context中的内容（只有声明了才接受的到）
//     static contextType = MyContext
//     render() {
//         const { username,age} = this.context
//       return (
//         <div style={{width:'100%',background:'yellow',padding:'8px'}}>
//           <div>C组件</div>
//           <h4>从A接受的用户名：{username}, 年龄是：{age}</h4>
//         </div>
//       )
//     }
//   }

function C() {
      return (
        <div style={{width:'100%',background:'yellow',padding:'8px'}}>
          <div>C组件</div>
          <h4>
            <MyContext.Consumer>
                {
                    value =>{
                        return `姓名是${value.username}，年龄是${value.age}`
                    }
                }
            </MyContext.Consumer>
          </h4>
        </div>
      )
}
