import React from 'react';
import Layout from './components/Layout';
import './layout.css';
import AppRouter from './routes';

console.log(import.meta.env);

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
