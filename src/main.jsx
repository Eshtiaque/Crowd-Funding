import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Components/Routes/Routes';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-[#050816] text-white'>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>,
)