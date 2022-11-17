import React from "react"
import { useContext } from "react/cjs/react.development"
import { Codingcontext, Usercontext } from "./App"
let user2 = useContext(Usercontext)
let coding2 = useContext(Codingcontext)
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
    
    <h1>{user2}-{coding2}</h1>
    </div>
  )
}