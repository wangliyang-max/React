import {INCREMENT,DECREMENT} from '../const'

// 如果箭头函数的函数体只需要返回一个对象时，简写形式对象需要加上一个括号
export const increment = data=>({type:INCREMENT, data})
export const decrement = data=>({type:DECREMENT, data})
export const incrementAsync = (data, time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
          dispatch(increment(data))
        },time)
    }
}
