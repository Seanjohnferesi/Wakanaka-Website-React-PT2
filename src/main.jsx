import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from "./App"
import "./styles/global.css"
import WebsiteProvider from './context/context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <WebsiteProvider>
                <App />
            </WebsiteProvider>
        </StrictMode>
    </BrowserRouter>
)