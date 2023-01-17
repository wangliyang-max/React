import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink'
import News  from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home组件</h3>
        <div>
          <ul class="nav nav-tabs">
              <li>
                <MyNavLink to="/home/news">News</MyNavLink>
              </li>
              <li>
                <MyNavLink to="/home/message">Message</MyNavLink>
              </li>
          </ul>

          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}
