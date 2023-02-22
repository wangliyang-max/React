import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state ={
        hasError:''//表示子组件是否产生错误
    }

    // 当Praent的子组件发生错误的时候会触发getDerivedStateFromError函数，并携带错误信息
    static getDerivedStateFromError(error){
        console.log("粗错了", error);
        // 直接修改estate中的信息
        return {hasError:error}         
    }

    // 当组件渲染出错的时候就会调用该钩子
    componentDidCatch(){
        console.log('统计错误次数，发送给后台，用于编码人员进行问题解决');
    }
  render() {
    return (
      <div style = {{width:'500px',background:'orange',padding:'8px'}}>
        <h2>Parent组件</h2>
        {
            this.state.hasError? <h2>当前网络不稳定，请稍后重试</h2>:<Child/>
        }
      </div>
    )
  }
}
