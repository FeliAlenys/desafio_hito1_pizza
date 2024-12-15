import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tu propio CSS, si lo tienes
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
