import React, { Component } from 'react'
import {nanoid} from 'nanoid'
// 限制PropTypes
import PropyTypes from 'prop-types'
import './index.css'

export default class index extends Component {
  // 对Props进行类型的限制
  static propsTypes = {
    addTodo: PropyTypes.func.isRequired
  }
  handleKeyUp = (event)=>{
    const {keyCode, target} = event
    if(keyCode !== 13) {
      return
    } else {
      if(target.value.trim()==='') {
        alert("输入不能为空！")
        return;
      }
      // uuid可以生成唯一的标识，但是体积比较大
      // nanoid也可以生成唯一的标识，但是体积小
      const todoObj = {id:nanoid(), name:target.value, done:false}
      this.props.addTodo(todoObj)
      target.value = ''
    }
  }
  render() {
    return (
    <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
    )
  }
}
