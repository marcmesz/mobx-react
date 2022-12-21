import { observer } from "mobx-react-lite"

const Counter = observer(({ store }) => {
    return (
        <>
            <h1>{store.store.count}</h1>
            <div>
                <button onClick={() => store.decrementCount(1)}>- decrement</button>
                <button onClick={() => store.incrementCount(1)}>increment +</button>
            </div>
        </>
    )
})

export default Counter