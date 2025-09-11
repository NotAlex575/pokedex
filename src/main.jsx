import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';      //PER INSERIRE BOOTSTRAP NEL PROGETTO
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //PER FAR FUNZIONARE IL DROPDOWN

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
