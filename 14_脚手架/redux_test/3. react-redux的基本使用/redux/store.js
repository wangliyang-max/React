// 暴露store对象
import {createStore} from "redux"
import countReducer from "./count_reducer"
import {applyMiddleware} from "redux"
import thunk from 'redux-thunk'

export default createStore(countReducer, applyMiddleware(thunk))