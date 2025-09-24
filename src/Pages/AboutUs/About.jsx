import React from 'react'
import { ButtonBack } from '../../components/ButtonBack/ButtonBack'
import CustomSeparator from '../../components/BreadCrumbs/CustomSeparator'

const About = () => {
  return (
    <>
     <div className="ml-30 mt-10 flex gap-5 items-center breadcrumbs-wrapper">
        <ButtonBack/>
        <CustomSeparator/>
        </div>

    <div className="bg-gray-200 flex flex-col justify-center items-center delivery-section m-10 rounded-3xl">

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

export default About