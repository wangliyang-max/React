import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0)
    }, 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          {/* checked 需要配合 onChange 使用 */}
          <input type="checkbox" onChange={this.handleCheckAll} checked = {total === doneCount && total !==0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick = {this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
