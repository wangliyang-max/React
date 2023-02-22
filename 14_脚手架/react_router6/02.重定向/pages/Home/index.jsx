import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
    <div>Home内容</div>
    {sum===2?<Navigate to="/about" replace={true}/>:<h4>当前页面的值是{sum}</h4>}
    <button onClick={()=>{setSum(2)}}>点我sum变2，sum变2之后会跳转到about页面</button>
    </div>

  )
}
