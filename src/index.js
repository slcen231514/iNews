import React from 'react';
import ReactDOM from 'react-dom/client';  // 从 'react-dom/client' 引入
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // 使用 createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
