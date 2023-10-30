import { useState } from 'react';
import Table from 'react-bootstrap/Table';
function Ecommerce()
{
    const [data,setapidata]=useState([])
    fetch("https://fakestoreapi.com/products").then((result)=>{
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
        <td>ID</td>
        <td>Title</td>
        <td>Price</td>
        <td>Category</td>
        <td>Image</td>
    </tr>
     {
        data.map((item)=>
        <tr>
            <td>{item.id}</td>
             <td>{item.title}</td>
             <td>{item.price*80} RS </td>
             <td>{item.description}</td>
             <td>{item.category}</td>
             <td><img src={item.image} width="100px" height="100px"></img></td>
        </tr>
        )
    }   
</tbody> 
        </Table>      
</div>
)
    }
    export default Ecommerce

