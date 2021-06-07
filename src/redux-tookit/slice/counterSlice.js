import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    // Dinh nghia cac action cap nhat state
    incrementCounter: (state) => {
      state.count += 1
    },
    decrementCounter: (state) => {
      state.count -= 1
    }
  }
})

console.log(slice);

// Export cac actions => dispatch vao store
export const { incrementCounter, decrementCounter } = slice.actions;

// Export selector get state 
export const selectorCounter = state => state.counter.count;

// Export reducer
export default slice.reducer;
