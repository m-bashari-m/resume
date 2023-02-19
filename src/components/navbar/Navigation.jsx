import React from 'react'
import { withTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'

function Navigation({ t, className}) {
  const {lang} = useLanguage()
  
  return (
    <div className={`navigation ${className}`}>
      <ul className={`${lang==="fa" ? "xs:flex-row-reverse" : ""} xs:flex xs:justify-between flex-col xs:flex-row`}>
        <li><a href="#about" className='navigation--link'>{t("About")}</a></li>
        <li><a href="#projects" className='navigation--link'>{t("Projects")}</a></li>
        <li><a href="#contact" className='navigation--link'>{t("Contact")}</a></li>
      </ul>
    </div>
  )
}

export default withTranslation()(Navigation)