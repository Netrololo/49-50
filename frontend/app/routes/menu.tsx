import { useState } from "react";
import { menuData } from "~/data/menu";
import MenuCard from "~/components/MenuCard";
import { useCart } from "~/hooks/useCart";
import type { MenuItem } from "~/types";
export function meta() {
    return [{ title: "Меню | Пещера" }];
}

export default function MenuPage() {
    const categories = ["Все", "Закуски", "Основные блюда", "Десерты", "Напитки"];
    const [activeCategory, setActiveCategory] = useState("Все");
    const { totalCount, addItem } = useCart();

    const filteredMenu = activeCategory === "Все"
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    const addToCart = (item: MenuItem) => {
        addItem(item);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-tom-thumb-900">Меню</h1>
                <span className="bg-tom-thumb-100 text-tom-thumb-800 px-4 py-2 rounded-full">
                    {totalCount} блюд
                </span>
            </div>

            <div className="flex gap-3 mb-8 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full border transition-colors ${activeCategory === cat
                            ? "bg-tom-thumb-600 text-white border-tom-thumb-600"
                            : "bg-white text-tom-thumb-800 border-tom-thumb-200 hover:bg-tom-thumb-50"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMenu.map(item => (
                    <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}