import React from 'react';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
  <div className="page">
    <Header />
    <main className="content">
      <RestaurantsListPage />
    </main>
    <Footer />
  </div>
);

export default App;
