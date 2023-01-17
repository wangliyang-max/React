// combineReducers用于汇总多个reducers
import {combineReducers} from "redux"
// 引入CountReducer
import count from "./count"
// 引入PersonReducer
import person from "./person"

// 汇总所有的Reducer
export default combineReducers({
    count: count,
    person: person
})