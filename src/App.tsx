import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

import { menuLoader } from './features/menu/menuLoader';
import orderLoader from './features/order/orderLoader';
import actionCreateOrder from './features/order/createOrderAction';
import { updateActionOrder } from './features/order/updateOrderAction';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Component } = await import('./ui/Home');
          return { Component };
        },
      },
      {
        path: '/menu',
        lazy: async () => {
          const { default: Component } = await import('./features/menu/Menu');
          return { Component };
        },
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        lazy: async () => {
          const { default: Component } = await import('./features/cart/Cart');
          return { Component };
        },
      },
      {
        path: '/order/new',
        lazy: async () => {
          const { default: Component } =
            await import('./features/order/CreateOrder');
          return { Component };
        },
        action: actionCreateOrder,
      },
      {
        path: '/order/:orderId',
        lazy: async () => {
          const { default: Component } = await import('./features/order/Order');
          return { Component };
        },
        loader: orderLoader,
        errorElement: <Error />,
        action: updateActionOrder,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
