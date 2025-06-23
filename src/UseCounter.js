import { useState } from "react"

const UseCounter=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(prev=>prev+1)
    }
    const decrement=()=>{
        setCount(prev=>prev-1)
    }
    return {increment,decrement,count}
}

export default UseCounter