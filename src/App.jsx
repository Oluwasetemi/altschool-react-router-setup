import React, { useState } from 'react';
import AppRouter from './routes';
import './layout.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      {/* layout */}
      <Layout />

      {/* routes in our App */}
      <AppRouter />
    </div>
  );
}

export default App;
