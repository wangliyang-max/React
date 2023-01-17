import React, { Component } from 'react'

export default class Count extends Component {
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
            {/* store.getState()获取state值 */}
            <h2>当前求和为：{this.props.count}</h2>
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
