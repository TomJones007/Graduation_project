import InfoSection from "../InfoSection/InfoSection.jsx";

export function MainDelivery() {
const orderWays = [
  { icon: "/Icons/Delivery_Icons/Web.svg", title: "На сайте", text: "" },
  { icon: "/Icons/Delivery_Icons/Mobile.svg", title: "В мобильном приложении", text: "" },
  { icon: "/Icons/Delivery_Icons/Phone.svg", title: "По телефону", text: "+38 (099) 0077-313"},
];

const paymentWays = [
  { icon: "/Icons/Delivery_Icons/Cash.svg", title: "Наличными курьеру", text: "У наших ниндзя всегда есть сдача" },
  { icon: "/Icons/Delivery_Icons/Card.svg", title: "Оплата картой", text: "Оплачивайте онлайн на сайте" },
  { icon: "/Icons/Delivery_Icons/Crypto.svg", title: "Криптовалютой", text: "Оплачивайте ваши заказы с помощью криптовалюты" },
];

const receivingOrders = [
  { icon: "/Icons/Delivery_Icons/Package.svg", title: "Доставка курьером", text: "Наши курьеры не заставят ждать" },
  { icon: "/Icons/Delivery_Icons/Location.svg", title: "Самовывоз", text: "Имеем 33 ресторана по всей Украине" },
  { icon: "/Icons/Delivery_Icons/Crypto.svg", title: "Криптовалютой", text: "Оплачивайте ваши заказы с помощью криптовалюты" },
];

const additionalOptions = [
  { icon: "/Icons/Delivery_Icons/Cash.svg", title: "Предзаказ на указанное время", text: "Закажи зарание, чтобы не забыть" },
  { icon: "/Icons/Delivery_Icons/LactoseFree.svg", title: "Безлактозные блюда", text: "Для тех кто не переносит лактозу" },
  { icon: "/Icons/Delivery_Icons/Cash.svg", title: "Вегетарианские роллы", text: "Заботимся о предпочтениях каждого клиента" },
];

  return (
    <>
      <InfoSection
        title="Как сделать заказ?"
        subtitle="Выберите наиболее удобный для вас способ"
        items={orderWays}
      />

      <InfoSection
        title="Оплата"
        subtitle="Убедитесь, что стоимость вашего заказа равна или превышает 400 гривен"
        items={paymentWays}
      />

      <InfoSection
        title="Оплата"
        subtitle="Убедитесь, что стоимость вашего заказа равна или превышает 400 гривен"
        items={receivingOrders}
      />

      <InfoSection
        title="Оплата"
        subtitle="Убедитесь, что стоимость вашего заказа равна или превышает 400 гривен"
        items={additionalOptions}
      />

    </>
  );
}

export default MainDelivery
