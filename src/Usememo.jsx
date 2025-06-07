import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [namee, setName] = useState('First')
    const expensiveCalc = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < 100; i++) {
            sum += i
        }
    }, [count])
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            {namee}
            <button onClick={() => setName('Second')}>NameChange</button>

            <p>
                {expensiveCalc}
            </p>
        </div>
    )
}

export default UseMemo