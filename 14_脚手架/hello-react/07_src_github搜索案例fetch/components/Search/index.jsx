import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = async() => {
    const {keyValueElement:{value: keyWord}} = this
    PubSub.publish('updataListState', {isFirst:false,isLoading: false})

    // -------------------------axios请求--------------------------------
    // axios.get(`api1/search/users?q=${keyWord}`).then(
    //   response => {
    //     PubSub.publish('updataListState', {isLoading: false, users: response.data.items})
    //   },
    //   error => {
    //     PubSub.publish('updataListState', {isLoading: false, err: error.message})
    //   }
    // )


    // -------------------------fetch请求（未优化）-------------------------------
    // fetch的返回结构是一个promise对象，.then的结果仍然是一个promise对象
    // fetch(`api1/search/users?q=${keyWord}`).then(
    //   // 数据格式
    //   // 可以验证是否可以和服务器建立联系
    //   response => {
    //     console.log('联系服务器成功了');
    //     return response.json()
    //   },
    //   error => {
    //     console.log('联系服务器失败了', error);
    //     return new Promise()
    //   }
    // ).then(
    //   // 真正的数据
    //   response => {
    //     console.log('获取数据成功了', response);
    //   },
    //   error => {
    //     console.log('获取数据失败了', error);
    //   }
    // )


    // -------------------------fetch请求（已优化）-------------------------- 
    // fetch(`api1/search/users?q=${keyWord}`).then(
    //   response => {
    //     console.log('联系服务器成功了');
    //     return response.json()
    //   }
    // ).then(
    //   response => {console.log('获取数据成功了', response);}
    // ).catch((error) => {
    //   console.log('请求出错', error);
    // })


    // -------------------------fetch请求（再优化）-------------------------- 
    try {
      const response = await fetch(`api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('updataListState', {isLoading: false, users: data.items})
    } catch(error){
      PubSub.publish('updataListState', {isLoading: false, err: error.message})
    }
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
