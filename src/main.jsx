import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '../public/style/StyleComponents.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)