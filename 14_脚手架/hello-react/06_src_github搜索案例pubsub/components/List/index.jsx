import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class index extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err:'',//请求相关的错误信息
  }
  componentDidMount() {
    this.token = PubSub.subscribe('updataListState', (_, data) => {
      // 第一个参数是消息名, 第二个参数才是数据
     this.setState(data)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
    <div className="row">
      {
        isFirst ? <h2>欢迎使用，输入关键字点击搜索就可以出现用户信息</h2> :
        isLoading ? <h2>Loading......</h2> :
        err ? <h2 style={{color:'red'}}>{err}</h2> :
        users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img alt='avatar' src={user.avatar_url} style={{width: '100px'}}/>
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          )
        })
      }
    </div>
    )
  }
}
