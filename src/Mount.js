const { Component } = require("react");

class Mount extends Component
{
constructor()
{
    super()
    console.log("Constructor")
}
componentDidMount()
{
    console.log("Component did mount")
}
render()
{
    console.log("Render")
    return(
<div></div>
    )
}
}
export default Mount