import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    dataDetail:[
        {id: '001', context: '我是消息1的内容'},
        {id: '002', context: '我是消息2的内容'},
        {id: '003', context: '我是消息3的内容'},
    ]
  }
  render() {
    const {id, title} = this.props.match.params
    const {dataDetail} = this.state 
    const findDetail = dataDetail.find((detailObj) => {
        return detailObj.id === id
    })
    return (
      <div>
        <div>ID: {id}</div>
        <div>TITLE: {title}</div>
        <div>Context:{findDetail.context}</div>
      </div>
    )
  }
}
