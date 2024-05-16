import { useState } from "react";

function Counter(){
    const [count , setCount] = useState(0)
    return (
        <>
        
            Count : {count}
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
            
        
        </>
    )
}

export default Counter;