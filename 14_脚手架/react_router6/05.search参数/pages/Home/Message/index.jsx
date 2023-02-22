import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message(){
  const [message] = useState([
    {id:'001', title:'message001', context:'message001的内容'},
    {id:'002', title:'message002', context:'message002的内容'},
    {id:'003', title:'message003', context:'message003的内容'},
  ])
    return (
    <div>
        <ul>
          {
            message.map((m)=>{
              return <li key={m.id}>
                <Link to={`details?id=${m.id}&title=${m.title}&context=${m.context}`}>{m.title}</Link>
              </li>
            })
          }
        </ul>
        <Outlet/>
      </div>
    )
}
