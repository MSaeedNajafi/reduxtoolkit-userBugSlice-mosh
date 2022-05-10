import './App.css';
import BugList from './components/BugLists';
import configureStore from './store/configureStore'

import { Provider } from 'react-redux'
const store = configureStore()



function App() {
  return (
    <Provider store={store}>
      <BugList />
    </Provider>
  );
}

export default App;
