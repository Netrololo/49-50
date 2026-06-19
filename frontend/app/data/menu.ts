import type { MenuItem } from "~/types";
export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Колбаса",
    description: "Вкуснейшая колбаска",
    price: 1500,
    category: "Закуски",
    image: new URL("../assets/kolbasa.jpg", import.meta.url).href,
  },
  {
    id: 2,
    name: "Хлеб",
    description: "Французский багет",
    price: 110,
    category: "Закуски",
    image: new URL("../assets/xleb.jpg", import.meta.url).href,
  },
  {
    id: 3,
    name: "Кока-кола",
    description: "Освежающая кола",
    price: 120,
    category: "Напитки",
    image: new URL("../assets/cola.jpg", import.meta.url).href,
  },
  {
    id: 4,
    name: "Куриные ножки",
    description: "Ножки перепёлки",
    price: 550,
    category: "Основные блюда",
    image: new URL("../assets/chicken.jpg", import.meta.url).href,
  }
]