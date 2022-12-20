import { observer } from "mobx-react-lite"

const Counter = observer(({ state }) => {
    return (
        <>
            <h1>{state.count}</h1>
            <div>
                <button onClick={() => state.decrementCount()}>- decrement</button>
                <button onClick={() => state.incrementCount()}>increment +</button>
            </div>
        </>
    )
})

export default Counter