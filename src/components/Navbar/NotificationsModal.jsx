import { useState } from "react";
import Modal from "../Modal/Modal";

const NotificationsModal = ({ open, onClose }) => {
  const [selectedTip, setSelectedTip] = useState(null);

  const tips = [
    { value: 20, percent: "5%" },
    { value: 50, percent: "10%" },
    { value: 75, percent: "15%" },
  ];

  const notifications = [
    { id: 1, text: "Ашот, ваш заказ успешно доставлен!", type: "success", time: "16:40" },
    { id: 2, text: "Итальянская полиция обнаружила картину Тициана, исчезнувшую в 2004 году", time: "16:40" },
    { id: 3, text: "Итальянская полиция обнаружила картину Тициана, исчезнувшую в 2004 году", time: "16:40" },
  ];

  return (
    <Modal open={open} onClose={onClose} mobileMode="center" labelledBy="notif-title">
      {/* header */}
      <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b rounded-t-2xl">
        <div className="flex items-center justify-between">
          <h2 id="notif-title" className="text-lg sm:text-xl font-bold">Уведомления</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#F5F5F7] text-gray-600 hover:bg-gray-200 cursor-pointer"
            aria-label="Закрыть уведомления"
          >
            ✕
          </button>
        </div>
      </div>

      {/* tipping card */}
      <div className="px-5 pt-4 pb-5">
        <div className="bg-[#F5F5F7] rounded-xl p-4 sm:p-5">
          <p className="font-medium mb-2">Ашот, ваш заказ успешно доставлен!</p>
          <p className="font-semibold mb-3 text-center">Хотите оставить чаевые?</p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {tips.map((tip) => (
              <button
                key={tip.value}
                onClick={() => setSelectedTip(tip.value)}
                className={`p-3 rounded-lg border text-base sm:text-lg font-medium transition
                  ${
                    selectedTip === tip.value
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white hover:bg-gray-100 border-gray-200"
                  }`}
              >
                {tip.value} ₴ ({tip.percent})
              </button>
            ))}
            <input
              type="number"
              placeholder="Укажите сумму"
              className="col-span-3 p-3 border rounded-lg"
              onChange={(e) => setSelectedTip(Number(e.target.value) || null)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between mt-4">
            <button className="text-red-500 font-medium hover:underline">
              Не оставлять чаевых
            </button>
            <button className="text-green-600 font-semibold">
              Оплатить {selectedTip ? `${selectedTip} ₴` : "₴"}
            </button>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="px-5 pb-5">
        <div className="max-h-[52vh] overflow-y-auto space-y-3 pr-1">
          {notifications.map((n) => (
            <div key={n.id} className="border rounded-lg p-3 relative">
              <p className="text-sm sm:text-base">{n.text}</p>
              <span className="text-xs text-gray-500">{n.time}</span>
              {n.type === "success" && (
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default NotificationsModal;
