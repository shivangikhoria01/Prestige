const { Component } = require("react");
class ClassState extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            name:"Shivangi"
        }
    }
render()
{
    return(
        <div>
            <h1>My name is {this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Shivi"})}>Submit</button>
        </div>
    )
}
}
