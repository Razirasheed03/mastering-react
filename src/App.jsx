// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [msg, setMsg] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(data => data.json())
//       .then(data => setMsg(data))
//   }, [])
//   return (
//     <div>
//       <h2>{
//         msg.map(post => (
//           <ul>
//             <li>{post.title}</li>
//           </ul>
//         ))

//       }</h2>
//     </div>
//   )
// }


// export default App
import React from 'react'
import Hoc from './Hoc'
import AlertMount from './AlertMount'
import LazyTry from './LazyTry'

const App = () => {
  return (
    <div>
      <LazyTry/>
    </div>
  )
}

export default App