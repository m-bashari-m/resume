import React, { useState } from 'react'
import Icon from './Icon'
import { useLanguage } from '../../context/LanguageContext'
import { BsTranslate } from "react-icons/bs"



function Features(props) {
  const {langToggler} = useLanguage()

  return (
    <div className='flex'>
      <Icon className="p-3">
        <BsTranslate 
          onClick={langToggler}
          size="24px"
        />
      </Icon>
    </div>
  )
}

export default Features