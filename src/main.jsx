import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './Global';
import App from './views/App';

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
      <GlobalStyle />
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </>
);
