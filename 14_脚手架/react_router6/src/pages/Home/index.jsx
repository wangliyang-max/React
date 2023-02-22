import React from 'react'
import {NavLink, Outlet, useOutlet, useResolvedPath} from 'react-router-dom'

export default function Home() {
    console.log("useOutlet", useOutlet());
    console.log("useResolvedPath", useResolvedPath('/user?id=0001&name=yang#gwe'));


    return (
      <div>
        <h3>我是Home组件</h3>
        <div>
          <ul className="nav nav-tabs">
              <li>
                {/*to里面的路径也可以简写，不带父路由，注意前面也不能带/，因为如果带/表示的是从根路由开始匹配，即匹配/news  */}
                <NavLink className="list-group-item" to="news">News</NavLink>
              </li>
              <li>
                <NavLink className="list-group-item" to="message">Message</NavLink>
              </li>
          </ul>

           {/* 对router6来说 需要使用Outlet使组件呈现 */}
          <Outlet/>
        </div>
      </div>
    )
}
