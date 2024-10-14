import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Headline from './text.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Headline/>
  </StrictMode>,
)
