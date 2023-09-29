import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import AuthProvider from './Pages/AuthProvider/AuthProvider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
     <div className='max-w-7xl mx-auto '>
      <React.StrictMode>
       <AuthProvider>
          <RouterProvider router={router} />
       </AuthProvider>
     </React.StrictMode>
   </div>
  </HelmetProvider>
 
)
