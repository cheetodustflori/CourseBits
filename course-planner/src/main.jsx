import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    <CourseList/>
  </StrictMode>,
)
