import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from '../public/style/StyleComponents.jsx'
import App from './App.jsx'
// import About from './pages/About.jsx'
// import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    {/* <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)