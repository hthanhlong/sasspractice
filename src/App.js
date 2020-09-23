import React from 'react';
import './app.css';
import Header from './Components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <div className="app">
      <CssBaseline />
      <header><Header /></header>
      <main>hello main</main>
      <footer>hello footer</footer>
    </div>
  );
}

export default App;
