import App from './container/App';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

const { store } = configStore();

const Counter = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Counter;