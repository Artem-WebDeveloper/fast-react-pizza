import type { ActionFunctionArgs } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

export async function updateActionOrder({ params }: ActionFunctionArgs) {
  const id = params.orderId;
  const data = { priority: true };

  if (!id) throw new Error('Order ID missing');

  await updateOrder(id, data);
}
