import React, { Component } from 'react'
import PropyTypes from 'prop-types'
import './index.css'

export default class index extends Component {
  // 对Props进行类型的限制
  static propsTypes = {
    updateTodo: PropyTypes.func.isRequired,
    id: PropyTypes.string.isRequired,
    name: PropyTypes.string.isRequired,
    done: PropyTypes.bool.isRequired
  }
  state = {mouse:false}
  handleMouse = (flag)=>{
    // 在标签中函数使用了括号
    return () => {
      this.setState({mouse:flag})
    }
  }
  handleChange = (id) => {
    return (event) => {
      // 注意是checked不是value
      const checked =  event.target.checked;
      this.props.updateTodo(id, checked)
    }
  }
  handleDelete = (id)=>{
    if(window.confirm("确定删除吗？")){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state;
    return (
        <li style={{backgroundColor: mouse? '#ddd':'white'}} onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
            <label>
              {/* 使用checked，必须要结合onChange事件才能进行修改
               而defaultChecked，初次页面展示时是否勾选，当数据再发生改变的时候就不好用了*/}
                <input type="checkbox" checked = {done} onChange = {this.handleChange(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?"block":"none"}}>删除</button>
        </li>
    )
  }
}
