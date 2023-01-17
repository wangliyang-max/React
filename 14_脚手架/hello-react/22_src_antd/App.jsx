import React, { Component } from 'react'
import { StepBackwardOutlined } from '@ant-design/icons'
import { DatePicker, Button } from 'antd';
const { RangePicker } = DatePicker

export default class App extends Component {
  
  render() {
    return (
      <div>
        App
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="link">Link Button</Button>
        <StepBackwardOutlined />
        <br/>
        <RangePicker />

      </div>
    )
  }
}
