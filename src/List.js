function List()
{
    var arr=["Ram", "Syam", "Mohan", "Rahul"]
    return(
        <div>
          {
           arr.map((item)=>
            <h1>{item}</h1>
        )
        }        
        </div>
    )
}
export default List