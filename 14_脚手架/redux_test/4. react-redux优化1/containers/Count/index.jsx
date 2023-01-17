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

// 映射状态
// const mapStateToProps = state =>({count:state})

// 映射操作状态的方法
// const mapDispatchToProps = (dispatch)=>(
//     {
//         increment:data=>dispatch(createIncrementAction(data)),
//         decrement:data=>dispatch(createDecrementAction(data)),
//         incrementAsync:(data,time)=>dispatch(createIncrementAsyncAction(data, time)),
//     }
// )

// 创建与UI组件建立联系的容器组件
// const CountContainer = connect()(CountUI)
 export default connect(
    state =>({count:state}),
    // mapDispatchToProps一般写法
    // (dispatch)=>(
    //     {
    //         increment:data=>dispatch(createIncrementAction(data)),
    //         decrement:data=>dispatch(createDecrementAction(data)),
    //         incrementAsync:(data,time)=>dispatch(createIncrementAsyncAction(data, time)),
    //     }
    // )

    // mapDispatchToProps的简写（react-redux自动调用dispatch）
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction,
    }
    
    )(CountUI)




