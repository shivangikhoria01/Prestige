import { useState } from "react";

function Control()
{
    const[name,setName]=useState();
    function hello()
    {
        console.log(name)
    }
    return(
        <div>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={hello}>Submit</button>
        </div>
    )  
}
export default Control
