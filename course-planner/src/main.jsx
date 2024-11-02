import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
