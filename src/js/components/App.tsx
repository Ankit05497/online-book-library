import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Homepage from './home';

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
