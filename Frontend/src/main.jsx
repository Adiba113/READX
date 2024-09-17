import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this line is present
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';
import { CartProvider } from './context/CartProvider.jsx'; // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);