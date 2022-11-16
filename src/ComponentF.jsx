import React from "react"
import { Codingcontext, Usercontext } from "./App"

export const ComponentF=()=>{
  return(
    <div>
      <Usercontext.Consumer>
   {
     user =>{
       return (
        
           <Codingcontext>
{
  coding =>{
    return <div>User context is {user} likes {coding}</div>
  }
}
           </Codingcontext>
         
       )
     }
   }
    </Usercontext.Consumer>
    </div>
  )
}