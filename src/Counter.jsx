import { useState } from "react";

function Counter(){
    const [count , setCount] = useState(0)
    const [todos, setTodos] = useState(false)
    return (
        <>
            {
                todos ?  <h1>hello</h1> : <h1>world</h1>

            }
            <button onClick={()=> setTodos(!todos)}>Change</button>
            Count : {count}
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
            
        
        </>
    )
}

export default Counter;