import { ADD_PERSON } from "../const"

const initState=[{id:'001', name:"Tom", age:18}]
export default function personReducer(preState=initState, action){
    const {type, data}= action
    switch(type){
        case ADD_PERSON:
            // preState.unshift(data)
            // return preState
            // 不能使用上述这种方式，因为redux会对返回值进行浅比较，如果返回结果和之前的一样就不会更新页面
            return [data, ...preState]
        default:
            return preState 
    }
    
}