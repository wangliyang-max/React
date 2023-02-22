import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        users:[
            {id:'001', name:'tom', age:18},
            {id:'002', name:'jack', age:20},
            {id:'003', name:'yang', age:18}
        ]
        // users:'test-error'
    }
  render() {
    const {users} = this.state
    return (
      <div style = {{width:'300px',background:'pink',padding:'8px'}}>
        <h2>Child组件</h2>
        {
            users.map((userObj)=>{
                return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
            })
        }
      </div>
    )
  }
}
