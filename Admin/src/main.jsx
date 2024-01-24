import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider>
  <React.StrictMode></React.StrictMode>
  </RouterProvider>
)
