import React, { Component } from 'react'
import qs from 'qs'

let obj = {name:'yang', age:20}
// 转成 urlencoded格式 （key=value&key=value）
console.log(qs.stringify(obj));

console.log(qs.parse('name=yang&age=20'))

export default class Detail extends Component {
  state = {
    dataDetail:[
        {id: '001', context: '我是消息1的内容'},
        {id: '002', context: '我是消息2的内容'},
        {id: '003', context: '我是消息3的内容'},
    ]
  }
  render() {
    // 接收params参数
    const {id, title} = this.props.match.params

    // 接收search参数
    // const {search}  = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    // 接收state参数
    // const {id, title} = this.props.location.state || {}


    const {dataDetail} = this.state 
    const findDetail = dataDetail.find((detailObj) => {
        return detailObj.id === id
    }) || {}
    return (
      <div>
        <div>ID: {id}</div>
        <div>TITLE: {title}</div>
        <div>Context:{findDetail.context}</div>
      </div>
    )
  }
}
