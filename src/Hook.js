import { useEffect, useState } from "react"

function Hook()
{
    useEffect(()=>{
        console.log("LOADING....")
    })
    const[name,setName]=useState("Shivangi")
    return(
        <div>
            <h1>My name is {name}</h1>
            <button onClick={()=>setName("Shivi")}>Submit</button>
        </div>
    )
}
export default Hook
