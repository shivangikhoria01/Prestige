const { Component, createRef}= require("react")
class Ref extends Component
{
    constructor()
    {
        super()
        this.inputref=createRef()
    }
hello()
{
    // console.log(this.inputref)
    this.inputref.current.value="Hello World";
    this.inputref.current.style.color="red";
    this.inputref.current.style.background="green";
}
render()
{
    return(
        <div>
            <input type="text" placeholder="Enter name" ref ={this.inputref}/><br></br>
            <button onClick={()=>this.hello()}>submit</button>
        </div>
    )
}
}
export default Ref
