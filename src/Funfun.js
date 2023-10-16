import { useState } from "react"


function Funfun()
{
   // var name="Shivangi";
   var [name,setName]=useState("Shivangi")
    function hello()
    {
       // name="Shivi"
        setName("Shivi")
    }
    return(
        <div>
           <h1>My name is {name}</h1>
            <button onClick={hello}>submit</button>
        </div>
    )
}
export default Funfun