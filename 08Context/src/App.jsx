import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <main className="app-container">
        <header className="header">
          <h1>⚛️ React Context API &amp; useContext</h1>
          <p className="subtitle">
            Sharing global state across components seamlessly without prop drilling.
          </p>
        </header>

        <section className="content-grid">
          <Login />
          <Profile />
        </section>
      </main>
    </UserContextProvider>
  );
}

export default App;
