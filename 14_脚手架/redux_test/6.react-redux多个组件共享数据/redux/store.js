// 暴露store对象
import {createStore, combineReducers} from "redux"
// 引入CountReducer
import countReducer from "./reducers/count"
// 引入PersonReducer
import personReducer from "./reducers/person"
import {applyMiddleware} from "redux"
import thunk from 'redux-thunk'

// 汇总所有的Reducer
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))