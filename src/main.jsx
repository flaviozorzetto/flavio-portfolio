import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./Global"
import Header from "./components/Header"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
  </React.StrictMode>
)
