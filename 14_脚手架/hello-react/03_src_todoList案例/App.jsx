import React, { Component } from 'react'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

import "./App.css"

export default class App extends Component {

  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos:[
      {id:'001', name:'吃饭', done:true},
      {id:'002', name:'睡觉', done:true},
      {id:'003', name:'打豆豆', done:false}
    ]
  }

  // addTodo 
  addTodo = (todoObj) => {
    // 获取todos
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }
  updateTodo = (id, checked) => {
    const {todos} = this.state
    const newTodos = todos.map((item)=>{
      if(item.id === id)
        return {...item, done:checked}
      else
        return item
    })
    this.setState({todos: newTodos})
  }
  deleteTodo = (id) =>{
    const {todos} = this.state
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    this.setState({todos: newTodos})
  }
  // 全选
  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      return {...todo, done: done}
    })
    this.setState({todos: newTodos})
  }
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
