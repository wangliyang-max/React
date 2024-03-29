import React, { Component } from 'react'

export default class Count extends Component {
    state={count:0}
    increment=()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        this.setState({count:count+value*1})
    }
    decrement=()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        this.setState({count:count-value*1})
    }
    oddIncrement=()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        if(count%2 !== 0) {
          this.setState({count:count+value*1})
        }
    }
    asyncIncrement=()=>{
        const {count} = this.state
        const {value} = this.selectNumber
        setTimeout(()=>{
          this.setState({count:count+value*1})
        },500)
    }
    
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <select ref={c => this.selectNumber = c}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>&nbsp;&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.oddIncrement}>当前求和为奇数再+</button>&nbsp;
        <button onClick={this.asyncIncrement}>异步加</button>&nbsp;

      </div>
    )
  }
}
