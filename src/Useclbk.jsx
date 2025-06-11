const Child = React.memo(({ msg }) => {
    console.log('child rendered')
    return <button onClick={msg}>+</button>
})

const UseCLBK = () => {
    const [count, setCount] = useState(0)
    const increment = useCallback(() => {
        console.log('parent rendered')
        setCount(prev => prev + 1)
    }, [])
    return (
        <div>
            {count}
            <Child msg={increment} />
        </div>
    )
}

export default UseCLBK
