import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const renderReactDom = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

if (window.cordova) {
  document.addEventListener(
    'deviceready',
    () => {
      renderReactDom();
    },
    false,
  );
} else {
  renderReactDom();
}
