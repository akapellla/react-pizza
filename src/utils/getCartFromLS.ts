import type { CartItem } from "../redux/slices/cart/types";

export function getCartFromLS() {
  const data = localStorage.getItem("cart");
  const items: CartItem[] = data ? JSON.parse(data) : [];

  const totalPrice = Number(items.reduce((sum, obj) => sum + obj.price * obj.count, 0).toFixed(2));

  return { items, totalPrice };
}
