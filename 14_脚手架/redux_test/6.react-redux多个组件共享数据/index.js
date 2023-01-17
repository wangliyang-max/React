import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import store from "./redux/store"
import {Provider} from "react-redux" 

ReactDOM.render(
  // Provider为<App/>中的所有容器组件提供一个store,那么容器中无需自己传递store
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)

// react-redux可以不用手动检测，容器组件的connect可以检测
// store.subscribe(()=>{
//   ReactDOM.render(<App/>, document.getElementById("root"))
// })
