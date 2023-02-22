import React, { Component,Fragment } from 'react'

export default class index extends Component {
  render() {
    return (
        // fragment在react解析的时候不会被保存，可以较少层级结构
        // <></>标签在react解析的时候也不会被解析，但是和fragment的区别是fragment标签可以有key属性
        <Fragment>
            <div>index</div>
            <div>index</div>
        </Fragment>
      
    )
  }
}
