import React from 'react'
import UseCounter from './UseCounter'

const CustomHook = () => {
    const {increment,decrement,count}=UseCounter()
  return (
    <div>
        <h1>
          {count}
          </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CustomHook