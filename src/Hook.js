import { useEffect, useState } from "react"

function Hook()
{
    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)
    useEffect(()=>{
        console.log("LOADING....")
    },[count])
   
    return(
        <div>
            <h1>Count {count}</h1>
            <h1>Data {data}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setData(data+1)}>Data</button>
        </div>
    )
}
export default Hook