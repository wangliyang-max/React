import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Details(){
    const {state:{id,title,context}} = useLocation()

    return(
        <ul>
         <li>{title}</li>
         <li>{id}</li>
         <li>{context}</li>
        </ul>
    )  
}