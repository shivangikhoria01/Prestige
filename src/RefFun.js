const { useRef } = require("react")
function RefFun()
{
    const inputref=useRef()
    function hello()
{
    // console.log(this.inputref)
    inputref.current.value="Hello World";
    inputref.current.style.color="red";
    inputref.current.style.background="green";
}
    return(
        <div>
            <input type="text" placeholder="Enter name" ref ={inputref}/><br></br>
            <button onClick={()=>hello()}>submit</button>
        </div>
    )
}
export default RefFun