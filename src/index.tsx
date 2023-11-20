import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { todoApi } from './services/todoApi';
import router from './routes';

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <React.StrictMode>
    <ApiProvider api={todoApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
