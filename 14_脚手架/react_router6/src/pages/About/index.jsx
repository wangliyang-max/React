import React from 'react'
import {useNavigationType} from "react-router-dom"

export default function About() {
  console.log('useNavigationType', useNavigationType());
  return (
    <div>About内容</div>
  )
}
