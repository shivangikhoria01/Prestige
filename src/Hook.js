import { useState } from "react"

function Hook()
{
    const[name,setName]=useState("Shivangi")
    return(
        <div>
            <h1>My name is {name}</h1>
            <button onClick={()=>setName("Shivi")}>Submit</button>
        </div>
    )
}
export default Hook
