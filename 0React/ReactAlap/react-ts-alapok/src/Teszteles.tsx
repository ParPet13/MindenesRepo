import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Teszteles from './testeles.jsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <Teszteles />
    </StrictMode>
)