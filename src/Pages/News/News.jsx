import React from 'react'
import { ButtonBack } from '../../components/ButtonBack/ButtonBack'
import CustomSeparator from '../../components/BreadCrumbs/CustomSeparator'

const News = () => {
  return (
    <>
    <div className="ml-30 mt-10 flex gap-5 items-center breadcrumbs-wrapper">
            <ButtonBack/>
            <CustomSeparator/>
    </div>
    News</>
  )
}

export default News