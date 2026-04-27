import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import type { ICreateOrder } from '../../types';
import { isValidPhone } from '../../utils/helpers';

function parseOrderFormData(formData: FormData): ICreateOrder {
  return {
    customer: String(formData.get('customer')),
    phone: String(formData.get('phone')),
    address: String(formData.get('address')),
    priority: formData.get('priority') === 'on',
    cart: JSON.parse(String(formData.get('cart'))),
  };
}

export default async function createActionOrder({ request }: ActionFunctionArgs) {
  // получаем данные из формы
  const formData = await request.formData();

  // парсим данные и получаем объект для отправки POST-запроса
  const order = parseOrderFormData(formData);

  // создаем ошибки
  let errors: null | Record<string, string> = null;
  // Проверяем
  if (!isValidPhone(order.phone)) {
    errors = { phone: 'Please give us your correct number. We might need if to contact you.' };
  }
  // Возвращаем если ошибки не null
  if (errors) return errors;

  // Отправляем заказ, если все ок
  const newOrder = await createOrder(order);

  // Редиректим на страницу созданного заказа
  return redirect(`/order/${newOrder.id}`);
}

/* export default async function createActionOrder({ request }: ActionFunctionArgs) {
  // получаем данные из формы
  const formDate = await request.formData();

  // преобразуем в объект
  const data = Object.fromEntries(formDate);

  // корректируем формат данных в объекте, через деструктурирование
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  console.log(order);
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
 */
