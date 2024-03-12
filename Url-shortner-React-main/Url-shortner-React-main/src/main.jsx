import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { CustomHook } from './Contexts/CustomHook.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomHook>
    <App />
    </CustomHook>
  </React.StrictMode>,
)
