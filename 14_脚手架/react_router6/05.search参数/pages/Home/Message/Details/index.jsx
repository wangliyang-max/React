import React from 'react'
import {useSearchParams, useLocation} from 'react-router-dom'

export default function Details(){
    // search: 存储search参数
    // useSearch：更新search参数的方法
    const [search, setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const context = search.get('context')

    const location =useLocation()
    console.log("location", location);

    return(
        <ul>
            <li><button onClick={()=>setSearch('id=000&title=消息0&context=消息0的内容')}>点我更新search参数</button></li>
            <li>{id}</li>
            <li>{title}</li>
            <li>{context}</li>
        </ul>
    )  
}