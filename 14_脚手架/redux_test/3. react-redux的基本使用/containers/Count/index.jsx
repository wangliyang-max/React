// 引入Count的UI组件
import CountUI from "../../components/Count";

// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction } from "../../redux/count_action";

// 引入redux中的store,但是不能通过import引入，需要在父组件中通过组件的props传递过来

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，vale就作为传递给UI组件props的value——传递状态
function mapStateToProps(state){
    // state参数，就是从store.getState()中获取的，react-redux直接为我们提供好了
    return {count:state}
}

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，vale就作为传递给UI组件props的value——传递操作状态的方法
function mapDispatchToProps(dispatch){
    // diapatch参数，就是从store.dispatch()中获取的
    return {
        increment:data=>dispatch(createIncrementAction(data)),
        decrement:data=>dispatch(createDecrementAction(data)),
        incrementAsync:(data,time)=>dispatch(createIncrementAsyncAction(data, time)),
    }
}

// 创建与UI组件建立联系的容器组件
// const CountContainer = connect()(CountUI)
 export default connect(mapStateToProps, mapDispatchToProps)(CountUI)




