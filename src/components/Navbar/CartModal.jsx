import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

const CartModal = ({ open, onClose }) => {
  const cart = useSelector((s) => s.cart?.items ?? s.cart ?? []); // поддержка вашей структуры

  const qty = Array.isArray(cart) ? cart.reduce((a, v) => a + (v.quantity || 1), 0) : 0;
  const total = Array.isArray(cart) ? cart.reduce((a, v) => a + (v.price || 0) * (v.quantity || 1), 0) : 0;

  return (
    <Modal open={open} onClose={onClose} mobileMode="sheet" labelledBy="cart-title">
      <div className="px-5 py-4 border-b rounded-t-2xl bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h2 id="cart-title" className="text-lg sm:text-xl font-bold">Ваш заказ</h2>
          <button onClick={onClose} className="p-2 rounded-lg bg-[#F5F5F7] hover:bg-gray-200 cursor-pointer">✕</button>
        </div>
      </div>

      <div className="px-5 py-4">
        {qty === 0 ? (
          <div className="bg-[#F5F5F7] rounded-xl p-6 text-center">
            <p className="text-gray-600">В вашей корзине пока пусто</p>
            <button onClick={onClose} className="mt-4 bg-[#00CC2D] text-white rounded-xl px-5 py-3">Авторизоваться</button>
          </div>
        ) : (
          <>
            <ul className="space-y-3 max-h-[46vh] overflow-auto pr-1">
              {cart.map((item, i) => (
                <li key={i} className="bg-[#F5F5F7] rounded-xl p-3 flex items-center gap-3">
                  <img src={item.image} alt="" className="w-14 h-14 rounded-lg object-cover"/>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.weight}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{item.price}₴</p>
                    <p className="text-xs text-gray-500">x{item.quantity || 1}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600">Итого:</p>
              <p className="text-xl font-bold">{total} ₴</p>
            </div>

            <button className="w-full mt-3 bg-[#00CC2D] text-white rounded-xl py-3 font-semibold">
              Оформить заказ
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CartModal;
