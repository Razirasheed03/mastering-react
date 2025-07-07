import React, { useEffect, useState } from 'react'

const Childs = () => {
    useEffect(() => {
        return () => {
            alert('Are You Sure? The Child component will be unmounted')
        }
    }, [])
    return <h2>Im the child Compenent That will be Unmounted when clicking the Confirmation </h2>
}

const AlertMount = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            {display ? <Childs /> : null}
            <button onClick={() => setDisplay(false)}>CLICK</button>
        </div>
    )
}





export default AlertMount