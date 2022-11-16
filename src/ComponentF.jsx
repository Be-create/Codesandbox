import React from "react"
import { Codingcontext, Usercontext } from "./App"

export const ComponentF=()=>{
  return(
    <div>
      <Usercontext.Consumer>
   {
     user =>{
       return (
        
           <Codingcontext.Consumer>
{
  coding =>{
    return <div>User context is <span style={{color:"red"}}>{user}</span> likes <span style={{color:"red"}}>{coding}</span></div>
  }
}
           </Codingcontext.Consumer>
         
       )
     }
   }
    </Usercontext.Consumer>
    </div>
  )
}