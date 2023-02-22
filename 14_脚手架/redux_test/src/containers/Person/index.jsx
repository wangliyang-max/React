import React, { Component } from 'react'
import {nanoid} from 'nanoid' 
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'


class Person extends Component {

    addPerson=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj ={
            id:nanoid(),
            name,
            age
        }
        this.props.addPerson(personObj)

        this.nameNode.value=""
        this.ageNode.value=""
    }
  render() {
    return (
      <div>
        <hr/>
        <h2>Person组件</h2>
        <input ref={c=>this.nameNode=c} type="text" placeholder='请输入名字'></input>
        <input ref={c=>this.ageNode=c} type="text" placeholder='请输入年龄'></input>
        <button onClick={this.addPerson}>添加</button>
        <ul>
           {
            this.props.person.map((person)=>{
                return <li key={person.id}>{person.name}--{person.age}</li>
            })
           }
        </ul>
        <h2>上方组件的和：{this.props.count}</h2>
      </div>
    )
  }
}

export default connect(
  // 映射状态(state表示的是总的store，包括所有组件的state值)， 所以可以获取Count和Person的所有属性值
    state =>({person: state.person,
    count: state.count}),
    {addPerson}
)(Person)
