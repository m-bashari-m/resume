import React, { useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation({ t, className}) {
  const {lang} = useLanguage()
  let offset 
  useEffect(()=> {
    offset = window.innerHeight / -2 + 20
    console.log(offset, "hi")
  }, [])
  

  return (
    <div className={`navigation ${className}`}>
      
      <ul className={`ltr:flex-row-reverse xs:flex xs:justify-between flex-col xs:flex-row`}>
        <li>
          <Link
            to='hero'
            smooth={true}
            duration={500}
            className='navigation--link'
          >{t("Hero")}</Link>
        </li>
        <li>
          <Link
            to='projects'
            smooth={true}
            duration={1000}
            className='navigation--link'
          >{t("Projects")}</Link>
        </li>
        <li>
          <Link
            to='skills'
            smooth={true}
            duration={1500}
            className='navigation--link'
          >{t("Skills")}</Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            duration={2000}
            className='navigation--link'
          >{t("Contact")}</Link>
        </li>
      </ul>
    </div>
  )
}

export default withTranslation()(Navigation)