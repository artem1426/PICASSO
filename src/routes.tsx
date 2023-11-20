import { createBrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import Todo from './containers/Todo';

const router = createBrowserRouter([
  {
    path: '/todo/:id',
    element: <Todo />,
    index: true,
  },
  {
    path: '*',
    element: <Home />,
  },
]);

export default router;
