import { Provider } from 'react-redux';
import store from '../redux/store';
import './App.css';
import PowerModule from './powerModule/PowerModule';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div class='bg-image'></div>
        <PowerModule />
      </div>
    </Provider>
    
  );
}

export default App;
