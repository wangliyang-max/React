import React, { Component } from 'react'
export default class Parent extends Component {
  state = {carName:'奔驰c36'}
  changeCar = ()=>{
    this.setState({carName: "奔驰c36"})

    // 使用这种方式更新，PureComponent会将obj对象和原state对象判断为一个对象（因为对象地址没变），那么shouldComponentUpdate直接返回false，不会进行状态更新
    const obj = this.state
    obj.carName = "迈巴赫"
    this.setState(obj)
  }
  shouldComponentUpdate(nextProps,nextState) {
    // console.log('当前', this.props, this.state);
    // console.log('变化后',nextProps, nextState);
    if(this.state.carName === nextState.carName){
      return false
    }else{
      return true
    }
  }
  render() {
    console.log("父组件————render");
    return (
      <div style = {{width:'500px',background:'orange',padding:'8px'}}>
        <span>{this.state.carName}</span><br/>
        <button onClick = {this.changeCar}>点击换车</button>
        <Child carName={this.state.carName}/>

      </div>
    )
  }
}

class Child extends Component {
    // shouldComponentUpdate(nextProps,nextState) {
    //   if(this.props.carName === nextProps.carName){
    //     return false
    //   }else{
    //     return true
    //   }
    // }
    render() {
      console.log("子组件————render");
      return (
      <div style={{width:'100%',background:'pink',padding:'8px'}}>
          child组件
          <span>父组件传过来的车： {this.props.carName}</span>
        </div>
      )
    }
  }


