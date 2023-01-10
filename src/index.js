import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import FoundUser from './routes/FoundUser';
import FoundRepository from './routes/FoundRepository';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "search/user",
        element: <FoundUser />,
      },
      {
        path: "search/user/repository",
        element: <FoundRepository />, 
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// https://bit.ly/CRA-vitals
// https://reactrouter.com/en/main/start/tutorial
