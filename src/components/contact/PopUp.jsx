import React from 'react'
import { withTranslation } from 'react-i18next'

function PopUp({ t, ...props}) {
  return (
    <div className='absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[600px] max-w-9/10 text-center animate-fadeIn text-sm'>
      {
        props.type !== "error" 
        ? <div className='p-3 rounded-lg bg-green-100 text-green-700 font-bold'>{t("PopupSuccess")}</div>
        : <div className='p-3 rounded-lg bg-red-100 text-red-700 font-bold'>{t("PopupError")}</div>
      }
    </div>
  )
}

export default withTranslation()(PopUp)