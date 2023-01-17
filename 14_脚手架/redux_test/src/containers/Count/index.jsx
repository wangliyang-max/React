// 引入action
import {
    increment,
    decrement,
    incrementAsync } from "../../redux/actions/count";

import {connect} from 'react-redux'
import React, { Component } from 'react'

// UI组件
class Count extends Component {
    increment=()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }
    decrement=()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    oddIncrement=()=>{
        const {value} = this.selectNumber
        if(this.props.count%2===1){
            this.props.increment(value*1)
        }
    }
    asyncIncrement=()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1, 500)
    }
    
    render() {
        return (
        <div>
        <h2>Count组件</h2>
            {/* store.getState()获取state值 */}
            <h4>当前求和为：{this.props.count}</h4>
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


// 容器组件
export default connect(
    // 映射状态(state表示的是总的store，包括所有组件的state值)
    state =>({count:state.count}),
    // 映射操作状态的方法
    {
        increment,
        decrement,
        incrementAsync,
    }

)(Count)




