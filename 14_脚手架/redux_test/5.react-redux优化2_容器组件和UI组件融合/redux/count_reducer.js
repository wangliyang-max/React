import {INCREMENT,DECREMENT} from './const'

// reducer的本质就是一个函数
// reducer接收收到两个参数；之前的状态参数(preState)，动作对象(action)
export default function countReducer(preState, action) {
    if(preState === undefined) {
        preState = 99
    }

    const {type, data} = action
    // 根据type决定如何加工数据
    switch(type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default://初始化
            return preState
    }
}