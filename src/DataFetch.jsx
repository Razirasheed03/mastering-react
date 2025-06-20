import React, { useEffect, useState } from 'react'

const Datafetch = () => {
  const [msg, setMsg] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(data => setMsg(data))
  }, [])
  return (
    <div>
      <h2>{
        msg.map(post => (
          <ul>
            <li>{post.title}</li>
          </ul>
        ))

      }</h2>
    </div>
  )
}

export default Datafetch