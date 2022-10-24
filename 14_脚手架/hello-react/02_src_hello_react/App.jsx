// 注意这里{component}并非解构赋值，只是引入使用export暴露的Component
import React,{Component} from 'react'
import Hello from "./components/Hello"
// 引入Welcome组件
import Welcome from './components/Welcome'

// 创建并暴露App
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
