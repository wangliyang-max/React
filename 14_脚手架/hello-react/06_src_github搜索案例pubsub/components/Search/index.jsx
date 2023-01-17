import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = () => {
    const {keyValueElement:{value: keyWord}} = this

    // 更新数据到List组件中
    PubSub.publish('updataListState', {isFirst:false,isLoading: false})
    axios.get(`api1/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('updataListState', {isLoading: false, users: response.data.items})
      },
      error => {
        PubSub.publish('updataListState', {isLoading: false, err: error.message})
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
