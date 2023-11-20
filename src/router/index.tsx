import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// component
import Login from '@/views/login';
import Home from '@/views/home';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Home />,
    }
])

export default router;