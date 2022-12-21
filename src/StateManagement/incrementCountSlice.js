const incrementCountSlice = (store, num) => {
    store.count += num
    return store
}

export { incrementCountSlice }