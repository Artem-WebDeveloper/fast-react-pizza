export interface Pizza {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

export interface Order {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: Cart[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
}

export interface ICreateOrder {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: Cart[];
}

interface Cart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
