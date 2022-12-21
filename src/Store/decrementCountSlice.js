const decrementCountSlice = (store, num) => {
    store.count -= num
    return store
}

export { decrementCountSlice }