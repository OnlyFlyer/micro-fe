// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const elements = useRoutes(routes);
  console.log(elements, '--999');
  return (
    <div className="App">
      <h1>这是主应用 App 页面</h1>
        {elements}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
