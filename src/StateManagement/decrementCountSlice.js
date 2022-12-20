const decrementCountSlice = (state, num) => {
    state.count -= num
    return state
}

export { decrementCountSlice }