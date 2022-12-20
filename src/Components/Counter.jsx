import { observer } from "mobx-react-lite"

const Counter = observer(({ state }) => {
    return (
        <>
            <h1>{state.state.count}</h1>
            <div>
                <button onClick={() => state.decrementCount(1)}>- decrement</button>
                <button onClick={() => state.incrementCount(1)}>increment +</button>
            </div>
        </>
    )
})

export default Counter