import { useState } from "react"
import Table from 'react-bootstrap/Table';
function ApiData()
{
    const [data,setapidata]=useState([])
    fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        //console/log(result)
        result.json().then((data1)=>{
            console.log(data1)
            setapidata(data1)
        })
    })
return(
    <div>
        <Table striped bordered hover variant="dark">
<tbody>
    <tr>
        <td>User ID</td>
        <td> ID</td>
        <td>Title</td>
        <td>Body</td>
    </tr>
    {
        data.map((item)=>
        <tr>
            <td>{item.userid}</td>
             <td>{item.id}</td>
             <td>{item.title}</td>
             <td>{item.body}</td>
        </tr>
        )
    }   
</tbody>
        </Table>      
    </div>
)
}
export default ApiData