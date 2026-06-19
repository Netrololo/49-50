//Создаем интерфейс TypeScript для блюд из меню
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "Закуски" | "Основные блюда" | "Десерты" | "Напитки";
  image: string;
}
//О предметах в корзине
export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
//Для информации о ресторане
export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  workHours: string;
}
//Для данных заказа
export interface OrderData {
  items: CartItem[];
  total: number;
  customerName: string;
}