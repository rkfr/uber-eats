import React from 'react';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';

const App = () => (
  <div className="page">
    <Header />
    <main className="content">
      <RestaurantsListPage />
    </main>
    <footer>footer</footer>
  </div>
);

export default App;
