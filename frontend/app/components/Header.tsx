import { Link, NavLink } from "react-router";
export default function Header() {
    return (
        <header className="bg-tom-thumb-800 text-white shadow-md">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    НАТК
                </Link>
                <div className="flex gap-8 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-tom-thumb-100" : "text-white hover:text-tom-thumb-200"}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) => isActive ? "text-tom-thumb-100" : "text-white hover:text-tom-thumb-200"}
                    >
                        Меню
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) => isActive ? "text-tom-thumb-100" : "text-white hover:text-tom-thumb-200"}
                    >
                        Корзина
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "text-tom-thumb-100" : "text-white hover:text-tom-thumb-200"}
                    >
                        О нас
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}