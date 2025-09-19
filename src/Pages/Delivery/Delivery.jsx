import React from 'react'
import CustomSeparator from '../../components/BreadCrumbs/CustomSeparator'
import { ButtonBack } from '../../components/ButtonBack/ButtonBack'
import { MainDelivery } from './InfoSection/MainDelivery'
import './Delivery.css'

const Delivery = () => {
  return (
    <>
    <div className="ml-30 mt-10 flex gap-5 items-center breadcrumbs-wrapper">
    <ButtonBack/>
    <CustomSeparator/>
    </div>

    <div className="flex flex-col items-center bg-white mt-30 delivery-header">
    <h1 className='text-4xl font-bold w-220 mt-35 mb-5 ml-40'>
        Доставка
    </h1>

    <div className="cicles flex gap-10 mt-5 mb-8 delivery-circles">
        <div className="flex gap-3 items-center circle-item">
        <img src="/Icons/Map_Icons/GreenCircle.svg" alt="GreenCircle" />
        <p> — Бесплатная доставка</p>
        </div>
        <div className="flex gap-3 items-center circle-item">
        <img src="Icons/Map_Icons/YellowCircle.svg" alt="YellowCircle" />
        <p> — Платная доставка</p>
        </div>
        <div className="flex gap-3 items-center circle-item">
        <img src="Icons/Map_Icons/RedCircle.svg" alt="RedCircle" />
        <p> — Доставку не делаем</p>
        </div>
    </div>

<iframe className='delivery-map'
        src="https://yandex.uz/map-widget/v1/?ll=82.907153%2C55.024580&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5MjE1NBJI0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDRg9C70LjRhtCwINCn0LDQv9C70YvQs9C40L3QsCwgMi8xIgoNdtClQhUrGVxC&z=16.67"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Яндекс карта"
        style={{ position: 'relative' }}
        ></iframe>
    </div>

    <div className="flex flex-col items-center justify-center delivery-main">
      <MainDelivery/>
    </div>

    <div className="bg-gray-200 flex flex-col justify-center items-center delivery-section">

    <div className="w-200 flex flex-col gap-10 my-15 delivery-about">
    <div className="flex flex-col gap-5 about-section">
      <h1 className='font-bold text-4xl'>О нас</h1>
      <p>Наши мастера с многолетним опытом в совершенстве овладели техниками разных кулинарных направлений и неизменно следуют проверенным временем рецептам. Приготовить кулинарный шедевр в авторском стиле им не составит труда, но только если вы этого пожелаете.</p>
    </div>

    <div className="flex flex-col gap-5 about-section">
      <h1 className='font-bold text-4xl'>Готовим из лучших ингредиентов</h1>
      <p>Визитная карточка NinjaSushi— свежесть и насыщенный вкус. Подобного эффекта удаётся достичь благодаря самым качественным ингредиентам, которые каждый день поступают на кухню от надёжных поставщиков. В наших правилах не экономить на объёме порций и не использовать замороженные продукты.</p>
    </div>
    </div>
      </div>
    </>
  )
}

export default Delivery