import React, { useEffect, useState } from 'react'

const Childs=()=>{
    useEffect(()=>{
        return ()=>{
            alert('ill unmount')
        }
    },[])
    return <h2>Im the child</h2>
}

const AlertMount = () => {
    const [display,setDisplay]=useState(true)
  return (
    <div>
        {display?<Childs/>:null}
        <button onClick={()=>setDisplay(false)}>CLICK</button>
    </div>
  )
}





export default AlertMount