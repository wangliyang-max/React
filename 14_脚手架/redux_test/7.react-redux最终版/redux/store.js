// 暴露store对象
import {createStore} from "redux"
import {applyMiddleware} from "redux"
import thunk from 'redux-thunk'

// 引入devtools
import {composeWithDevTools} from "redux-devtools-extension"
// 引入所有Reducers
import reducer from "./reducers" 

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))