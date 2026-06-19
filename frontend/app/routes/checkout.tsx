import { useState, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "~/hooks/useCart";
import Modal from "~/components/ui/Modal";
import Button from "~/components/ui/Button";

export function meta() {
    return [{ title: "Оформление заказа | Пещера" }];
}

export default function CheckoutPage() {
    const { items, totalAmount, clearCart } = useCart();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    if (items.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-stone-700 mb-4">
                    Нечего оформлять
                </h2>
                <Link to="/menu" className="text-tom-thumb-600 hover:underline text-lg">
                    Перейти в меню
                </Link>
            </div>
        );
    }
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            alert("Заполните имя и телефон");
            return;
        }

        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            setIsModalOpen(true);
        }, 2000);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        clearCart();
        navigate("/");
    };
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-tom-thumb-900 mb-8 text-center">
                Оформление заказа
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-stone-700 font-medium mb-2">
                        Ваше имя *
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tom-thumb-400"
                        placeholder="Иван Иванов"
                    />
                </div>

                <div>
                    <label className="block text-stone-700 font-medium mb-2">
                        Телефон *
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tom-thumb-400"
                        placeholder="+7 (999) 123-45-67"
                    />
                </div>
                <div>
                    <label className="block text-stone-700 font-medium mb-2">
                        Комментарий к заказу
                    </label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tom-thumb-400"
                        rows={3}
                        placeholder="Пожелания, аллергии..."
                    />
                </div>

                <div>
                    <label className="block text-stone-700 font-medium mb-2">
                        Способ оплаты
                    </label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={() => setPaymentMethod("card")}
                                className="accent-tom-thumb-600"
                            />
                            Картой онлайн
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={() => setPaymentMethod("cash")}
                                className="accent-tom-thumb-600"
                            />
                            Наличными
                        </label>
                    </div>
                </div>
                <div className="bg-stone-100 rounded-2xl p-5">
                    <h3 className="font-bold text-stone-800 mb-3">Ваш заказ:</h3>
                    {items.map((item) => (
                        <div
                            key={item.menuItem.id}
                            className="flex justify-between text-sm text-stone-600 py-1"
                        >
                            <span>
                                {item.menuItem.name} × {item.quantity}
                            </span>
                            <span>{item.menuItem.price * item.quantity} ₽</span>
                        </div>
                    ))}
                    <div className="border-t border-stone-300 mt-3 pt-3 flex justify-between font-bold text-lg">
                        <span>Итого:</span>
                        <span className="text-tom-thumb-700">{totalAmount} ₽</span>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 text-lg"
                >
                    {isProcessing ? "Обработка платежа..." : "Оплатить заказ"}
                </Button>
            </form>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Заказ оформлен, удачи!"
            >
                <div className="text-center py-4">
                    <p className="text-lg text-stone-700 mb-2">
                        Спасибо, {name}!
                    </p>
                    <p className="text-stone-500 mb-6">
                        Ваш заказ на сумму {totalAmount} ₽ принят.
                        Мы свяжемся с вами по телефону {phone}.
                    </p>
                    <Button onClick={handleCloseModal} className="w-full">
                        На главную
                    </Button>
                </div>
            </Modal>
        </div>
    );
}