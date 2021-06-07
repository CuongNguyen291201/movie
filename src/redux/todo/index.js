import App from './container/App';
import { Provider } from 'react-redux';
import store from './store';

const Todo = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Todo