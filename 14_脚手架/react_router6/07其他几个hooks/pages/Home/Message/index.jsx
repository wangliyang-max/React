import React,{useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message(){
  const [message] = useState([
    {id:'001', title:'message001', context:'message001的内容'},
    {id:'002', title:'message002', context:'message002的内容'},
    {id:'003', title:'message003', context:'message003的内容'},
  ])
  const navigate = useNavigate()
  function showDetails(m){
    navigate('details',{
      // 跳转模式
      replace:false,
      state:{
        id: m.id,
        title: m.title,
        context: m.context
      }
    })
  }
    return (
    <div>
        <ul>
          {
            message.map((m)=>{
              return <li key={m.id}>
                <Link
                  to='details'
                  state={{
                    id: m.id,
                    title: m.title,
                    context: m.context
                  }}>{m.title}
                  </Link>
                  &nbsp;&nbsp;
                  <button onClick={()=>showDetails(m)}>查看详情</button>

              </li>
            })
          }
        </ul>
        <Outlet/>
      </div>
    )
}
