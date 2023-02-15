import React from 'react'
import myImage from "../../images/my-image.jpg"
import { withTranslation } from 'react-i18next'

function Avatar({ t }) {
  return (
    <div className='text-center'>
      <img 
        src={myImage} 
        alt="An image of developer" 
        className='rounded-full w-32 h-32 object-cover mb-4 mx-auto'
      />

      <h5 className="text-2xl text-yellow-400 font-medium leading-tight mb-2">{t("Developer")}</h5>
      <p className="text-yellow-300">Junior front end developer / React</p>
    </div>
  )
}

export default withTranslation()(Avatar)