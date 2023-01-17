import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
    return (
    <div className="row">
      {
        // {}中只能写js表达式，不能写if语句和for语句，如果需要判断可以使三元表达式
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
