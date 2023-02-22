import React, { Component } from 'react'

export default class Demo extends Component {

    state = {count:0}
    add = ()=>{
        const {count} = this.state
        // setState的两种形式

        // 对象式的setState
        // 1.只传一个参数传递对象 （参数就是改变后的state数据）
        // this.setState({count:count+1})

        /* 2.传递两个参数
        第一个参数仍然是一个对象
        第二个参数是一个回调函数，render()调用完之后才进行调用（状态修改完之后再调用）
        */
        // setState触发的后续动作是异步的（---react的数据更改是异步的）
        // this.setState({count:count+1},()=>{
        //     console.log(this.state.count);
        // })

        // 函数式setState
        // 1.只传一个参数，参数是一个函数，但是函数的返回值是要修改后的对象 （参数就是改变后的state数据）
        // 该函数有两个参数state和props

        this.setState((state,props)=>{
            return {count:state.count}
        })
        // 2. 传递两个参数的时候，第二个参数仍然是回调函数







    }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
