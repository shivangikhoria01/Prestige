import { useState } from "react"

function FormData()
{
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [country,setCountry]=useState()
    function formsubmit(e)
  {
    e.preventDefault()
    console.log(name,age,country)
  }
    return(
        <div>
            <form onSubmit={formsubmit}>
                <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
                <input type="number" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}></input><br></br>
                Select Country
                <select onChange={(e)=>setCountry(e.target.value)}>
                    <option>India</option>
                    <option>China</option>
                    <option>japan</option>
                    <option>US</option>
                    <option>UK</option>
                </select><br></br>
                <button>Submit</button>
            </form>
            Name:{name}<br></br>
            Age: {age}<br></br>
            Country:{country}
        </div>
    )

}
export default FormData






