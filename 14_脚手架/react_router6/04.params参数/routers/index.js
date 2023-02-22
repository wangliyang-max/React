import { Navigate } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/Home/News'
import Message from '../pages/Home/Message'
import Details from '../pages/Home/Message/Details'


const routers = [
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/home',
      element: <Home/>,
      children:[
        {
            // 无需填写父级路径,前面也无需写/
            path:'news',
            element: <News/>
        },
        {
            path:'message',
            element: <Message/>,
            children:[
                {
                    path:'details/:id/:title/:context',
                    element:<Details/>
                }
                
            ]
        }
      ]

    },
    {
      path:'/',
      element: <Navigate to="/about"/>
    }
  ]

export default routers