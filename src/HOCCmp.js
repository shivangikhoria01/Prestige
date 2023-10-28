import { useState } from "react"

function HOCCmp()
{
    return(
        <div>
    <HOCRed data={Counter}></HOCRed>
    <HOCGreen data={Counter} ></HOCGreen>
    <HOCBlue data={Counter} ></HOCBlue>
        </div>
    )
function HOCRed(prop)
{
    return<h1 style={{backgroundColor:"red", width:"200px"}}><prop.data/></h1>
}
function HOCGreen(prop)
{
    return<h1 style={{backgroundColor:"green", width:"200px"}}><prop.data/></h1>
}
function HOCBlue(prop)
{
    return<h1 style={{backgroundColor:"blue", width:"200px"}}><prop.data/></h1>
}
function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Count : {count} </h1>
            <button onClick={()=>setCount(count+1)}>Submit</button>
        </div>
    )
}
}
export default HOCCmp