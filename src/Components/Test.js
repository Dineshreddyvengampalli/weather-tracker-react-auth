import React from 'react'
import {useEffect} from 'react'
import ReactGa from 'react-ga'
function Test() {
    useEffect(()=>{
        ReactGa.pageview(window.location.pathname + window.location.search)

    })
  return (
    <div>
        <h1>Testing route 1</h1>
    </div>
  )
}

export default Test