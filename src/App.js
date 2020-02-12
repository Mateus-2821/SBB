import React from 'react';
import logo from './logo.svg';
import login from './componentes/login/login'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <h3>Hello Word</h3>
        </div>
        <div>
        <login/>
        </div>
      </header>
    </div>
  );
}

export default App;
