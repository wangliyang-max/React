import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户的输入
    //  回调函数形式的ref直接存储在组件实例对象上
    // const value = this.keyValueElement.value

    // 解构赋值的连续写法 (代表从this身上取出keyValueElement,再从keyValueElement身上取出value，但是这种情况下keyValueElement是没有定义的)
    // const {keyValueElement:{value}} = this

    // 连续结构赋值并重命名 (将value重命名为keyWord)
    const {keyValueElement:{value: keyWord}} = this

    // 发送网络请求
    // 发送请求前更新state的状态
    this.props.updataAppState({isFirst:false, isLoading: true})
    // github服务器使用cors解决跨域
    // 发送请求时，如果发送请求的源和程序本身的运行的源一致就可以将源省略：
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    axios.get(`api1/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功后更新state的状态
        this.props.updataAppState({isLoading: false, users: response.data.items})
      },
      error => {
        // 请求失败后更新state的状态
        this.props.updataAppState({isLoading: false, err: error.message})
      }
    )

  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={currentNode => this.keyValueElement = currentNode}  type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
