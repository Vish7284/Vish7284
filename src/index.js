import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VoteContextProvider from './store/VoteContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VoteContextProvider>
      <App />
    </VoteContextProvider>
  </React.StrictMode>
);

