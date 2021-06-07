import counterReducer from './slice/counterSlice';

const rootReducer = {
  reducer: {
    counter: counterReducer
  }
}

export default rootReducer
