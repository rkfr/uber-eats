import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';

const App = () => (
  <Provider store={store}>
    <div className="page">
      <h1>Uber eats</h1>
      <RestaurantsListPage />
    </div>
  </Provider>
);

export default App;
