import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [status, setStatus] = React.useState("Waiting");

  React.useEffect(() => {
    axios.get('/api/ping')
      .then((res) => {
        setStatus(res.data.message)
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {status}
        </a>
      </header>
    </div>
  );
}

export default App;
