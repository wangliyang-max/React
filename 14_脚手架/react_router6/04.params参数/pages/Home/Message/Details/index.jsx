import React from 'react'
import {useParams,useMatch} from 'react-router-dom'

export default function Details(){
    const {id, title, context} = useParams()
    const match = useMatch('/home/message/details/:id/:title/:context')
    console.log("match", match);
    return(
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{context}</li>
        </ul>
    )  
}