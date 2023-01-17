import React, { Component } from 'react'
// 引入store用户获取redux中保存的对象
import store from "../../redux/store"
// 引入actionCreator用于创建action对象
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {

    increment=()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement=()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    oddIncrement=()=>{
        const count = store.getState()
        const {value} = this.selectNumber
        if(count%2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    asyncIncrement=()=>{
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        },500)
    }
    
    render() {
        return (
        <div>
            {/* store.getState()获取state值 */}
            <h2>当前求和为：{store.getState()}</h2>
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
