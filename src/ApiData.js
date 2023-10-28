function ApiData()
{
    fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        //console/log(result)
        result.json().then((data)=>{
            console.log(data)
        })
    })
return(
    <div>
        <h1>Api Data</h1>
    </div>
)
}
export default ApiData