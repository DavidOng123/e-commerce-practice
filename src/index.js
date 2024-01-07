import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Routers/AppRouters';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Provider'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <AppRouter/>
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
