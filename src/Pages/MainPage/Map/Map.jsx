import React from 'react'

const Map = () => {
  return (
    <>
    <div className="flex flex-col items-center bg-white mt-30">
    <h1 className='text-4xl font-bold w-220 border-2 text-center mt-35 mb-5'>
        Каждая кухня работает со своей зоной доставки, чтобы привезти еду максимально быстро
    </h1>

    <div className="cicles flex gap-10 mt-5 mb-8">
        <div className="flex gap-3 items-center">
        <img src="/Icons/Map_Icons/GreenCircle.svg" alt="GreenCircle" />
        <p> — Бесплатная доставка</p>
        </div>
        <div className="flex gap-3 items-center">
        <img src="Icons/Map_Icons/YellowCircle.svg" alt="YellowCircle" />
        <p> — Платная доставка</p>
        </div>
        <div className="flex gap-3 items-center">
        <img src="Icons/Map_Icons/RedCircle.svg" alt="RedCircle" />
        <p> — Доставку не делаем</p>
        </div>
    </div>

<iframe className=''
        src="https://yandex.uz/map-widget/v1/?ll=82.907153%2C55.024580&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzA5MjE1NBJI0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDRg9C70LjRhtCwINCn0LDQv9C70YvQs9C40L3QsCwgMi8xIgoNdtClQhUrGVxC&z=16.67"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Яндекс карта"
        style={{ position: 'relative' }}
        ></iframe>
        </div>

    <div className=" flex bg-white justify-between mx-15 rounded-3xl items-center mt-70 px-20 py-10 pb-13">
      <div className="">

      <h1 className='text-5xl font-bold w-120 my-5'>Ниндзя - это семья. Скачивайте наше приложение</h1>
      <p className='text-2xl w-86 text-[#1D1D1F]'>Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться голодным.</p>

      <div className="flex gap-5 mt-9">
        <button className='flex bg-black p-4 rounded-[5px] gap-2 w-[150px] '>
          <img className='h-10px' src="/Icons/Map_Icons/Apple.svg" alt="" />
          <img className='h-10px' src="/Icons/Map_Icons/AppStore.svg" alt="" />

        </button>
        <button className='flex bg-black p-4 rounded-[5px] gap-2 w-[150px]'>
          <img className='h-10px' src="/Icons/Map_Icons/GooglePlayIcon.svg" alt="" />
          <img className='h-10px' src="/Icons/Map_Icons/GooglePlay.svg" alt="" />
        </button>
      </div>
      </div>

      <div className="">
        <img className='absolute right-95 z-1 top-1986 mb-5' src="/Icons/Map_Icons/Iphone12.svg" alt="Iphone12" />
        <img className='absolute right-25 top-2042 mb-5' src="/Icons/Map_Icons/SamsungS20.svg" alt="SamsungS20" />
      </div>
    </div>

    <div className="flex items-center justify-center">
    <div className="flex flex-col gap-3 m-25 w-200">
      <p className='text-[#9E9E9E]'>В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.</p>

    <div className="flex justify-end p-2">
      <button className='flex gap-2 justify-center items-center w-45 '>
       <a href=""><p className='text-[#00CC2D]'>Читать больше</p></a>  
        <img src="/Icons/Map_Icons/GreenArrow.svg" alt="GreenArrow" />
      </button>
    </div>
    </div>
    </div>


    </>
  )
}

export default Map