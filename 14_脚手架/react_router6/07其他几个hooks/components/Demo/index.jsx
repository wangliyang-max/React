import React from 'react'
import { useNavigate, useInRouterContext, useNavigationType } from 'react-router-dom'

export default function Demo(){
    console.log("useInRouterContext", useInRouterContext());
    return (
        <div>
            我是Demo组件
        </div>
    )
}
