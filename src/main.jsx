import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import router from './Routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <Routes>
    <Route path='home' element={<App />} />

    </Routes>
    </BrowserRouter> */}

    <RouterProvider router={router}/>
  </StrictMode>,
)
