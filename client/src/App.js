import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Place from './components/Place/Place';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import RootLayout from './pages/Root';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: 'place', element: <Place /> },
        { path: 'profile', element: <Profile /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
