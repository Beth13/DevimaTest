import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, Flip } from 'react-toastify';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      transition={Flip}
      limit={5}
      theme="colored"
    />
  </React.StrictMode>,
);
