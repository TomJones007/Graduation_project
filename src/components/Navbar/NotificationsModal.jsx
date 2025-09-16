import React, { useState } from "react";

export const NotificationsModal = ({ onClose }) => {
  const [selectedTip, setSelectedTip] = useState(null);

  const tips = [
    { value: 20, percent: "5%" },
    { value: 50, percent: "10%" },
    { value: 75, percent: "15%" },
  ];

  const notifications = [
    {
      id: 1,
      text: "Ашот, ваш заказ успешно доставлен!",
      type: "success",
      time: "16:40",
    },
    {
      id: 2,
      text: "Итальянская полиция обнаружила картину Тициана, исчезнувшую в 2004 году",
      time: "16:40",
    },
    {
      id: 3,
      text: "Итальянская полиция обнаружила картину Тициана, исчезнувшую в 2004 году",
      time: "16:40",
    },
  ];

  return (
    <div className="fixed flex right-10 justify-center items-start z-5">
      {/* Модальное окно */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mt-10 relative">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl bg-[#F5F5F7] p-2 rounded-[9px] w-11"
        >
          ✕
        </button>

        {/* Заголовок */}
        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">Уведомления</h2>
        </div>

        {/* Секция чаевых */}
        <div className="p-5 bg-[#e2e2e4] rounded-2xl">
          <p className="mb-4 font-medium">Ашот, ваш заказ успешно доставлен!</p>

          <div className="">
          <p className="font-semibold mb-2 text-center">Хотите оставить чаевые?</p>

          <div className="flex flex-col gap-3">
            {tips.map((tip) => (
                <button
                key={tip.value}
                onClick={() => setSelectedTip(tip.value)}
                className={`p-3 rounded-lg border text-lg font-medium ${
                    selectedTip === tip.value
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                >
                {tip.value} ₴ ({tip.percent})
              </button>
            ))}
            </div>
            {/* Ввести вручную */}
            <input
              type="number"
              placeholder="Укажите сумму"
              className="p-3 border rounded-lg col-span-2"
            />
          </div>

          {/* Кнопки действий */}
          <div className="flex justify-between mt-4">
            <button className="text-red-500 font-medium hover:underline">
              Не оставлять чаевых
            </button>
            <button className="text-green-600 font-semibold">
              Оплатить {selectedTip ?? "₴"}
            </button>
          </div>
        </div>

      
       

        {/* Список уведомлений */}
        <div className="p-5 max-h-60 overflow-y-auto space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="border rounded-lg p-3 relative">
              <p>{n.text}</p>
              <span className="text-xs text-gray-500">{n.time}</span>
              {n.type === "success" && (
                <span className="absolute top-2 right-2 w-3 h-3 bg-orange-500 rounded-full"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
