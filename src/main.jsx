import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthPrividers from './providers/AuthPrividers';
import Orders from './components/Orders';
import PrivateRoutes from './routes/privateRoutes';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPrividers>
      <RouterProvider router={router} />
    </AuthPrividers>
  </React.StrictMode>,
)
