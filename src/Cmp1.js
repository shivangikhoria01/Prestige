import Cmp2 from "./Cmp2";

function Cmp1()
{
    function hello(data)
    {
        alert(data)
    }
    return(
        <div>
           <Cmp2 name={hello}></Cmp2>
        </div>
    )
}
export default  Cmp1
