import React, { Component } from 'react'
import PropTypes from "prop-types"
import Item from '../Item'
import './index.css'

export default class index extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const {todos, updateTodo, deleteTodo} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            // 多个参数，且在一个对象上， 直接使用 ...对象 进行传递  
            return <Item  key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
