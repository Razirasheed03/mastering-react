import React from 'react'


const Hello=(CompFn)=>{
    return function EnhancedFn(props){
        return(
            <>
            <h1>Hello</h1>
            <CompFn {...props}/>
            </>
        )
    }
}

const Welcome=()=>{
    return <h2>Welcome</h2>
}


const HelloWelcome=Hello(Welcome)

const Hoc = () => {
  return (
    <div>
        <HelloWelcome/>
    </div>
  )
}

export default Hoc