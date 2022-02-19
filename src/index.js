import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
      })
      .catch(function (error) {
        console.log('Service worker registration failed, error:', error);
      });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


