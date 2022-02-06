
import Main from './components/main';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function AppTodoList() {
   return (
      <Provider store={store}>
         <Main />
      </Provider>
   )
}

