import React, { useContext } from 'react'
import { Channelcontext, NameContext } from './App'

function CompC() {
    const myname = useContext (NameContext) 
    const mychannel = useContext(Channelcontext)
  return (
    <div>
      <h1>I am Component C</h1>
      <h2>{myname}</h2>
      <h2>{mychannel}</h2>
    </div>
  )
}

export default CompC
