import type { LoaderFunctionArgs } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';

export default async function orderLoader({ params }: LoaderFunctionArgs) {
  const { orderId } = params;

  if (!orderId) throw new Error('Order ID is required');
  const order = await getOrder(orderId);

  return order;
}

export type LoaderOrder = Awaited<ReturnType<typeof orderLoader>>;
