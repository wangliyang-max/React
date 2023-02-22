import React, { Component } from 'react'
import ReactDOM from 'react-dom'


// 类式组件
// class Demo extends Component {
//     state = {
//         count:0
//     }

//     myRef = React.createRef()

//     add = () => {
//         this.setState((state)=>({count:state.count+1}))
//     }
//     unmount = () =>{
//        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     show = () => {
//         alert("当前值：", this.myRef.current.value)
//     }

//     // 组件一挂载就执行
//     componentDidMount(){
//         this.timer = setInterval(()=>{
//             this.setState((state)=>({count:state.count+1}))
//         },1000)
//     }

//     // 组件卸载之后虚幻定时器不会自动清除，需要我们手动清除
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//   render() {
//     return (
//       <div>
//         <input type= "text" ref={this.myRef}/>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick = {this.add}>点我加1</button>
//         <button onClick = {this.unmount}>卸载组件</button>
//         <button onClick = {this.show}>展示当前输入框的值</button>

//       </div>
//     )
//   }
// }

// 函数式组件

function Demo(){

    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()
    // 默认没有this
    function add(){
        setCount(count+1)
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show(){
      alert(myRef.current.value)
    }

    // 使用生命周期钩子
    // 该回调函数在组件挂载和检测的值修改的时候进行调用，检测的值需要写在第二个参数的数组中，如果检测所有数据改变直接不传第二个参数即可，如果谁也监测就传递空数组
    // 此时相当于componentDidMount
    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)

        // 返回值相当于componentWillUnmount
        return ()=>{
            clearInterval(timer)
        }
    },[])

    
    return (
    <div>
      <input type="text" ref={myRef}></input>
        <h2>当前求和为：{count}</h2>
        <button onClick = {add}>点我加1</button>
        <button onClick = {unmount}>卸载组件</button>
        <button onClick = {show}>点我提示数据</button>

    </div>
    )
    
}


export default Demo