import {INCREMENT,DECREMENT} from './const'

// 如果箭头函数的函数体只需要返回一个对象时，简写形式对象需要加上一个括号
export const createIncrementAction = data=>({type:INCREMENT, data})
export const createDecrementAction = data=>({type:DECREMENT, data})
export const createIncrementAsyncAction = (data, time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
          dispatch(createIncrementAction(data))
        },time)
    }
}
