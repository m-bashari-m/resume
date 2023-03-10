import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { useMedia } from 'react-use'
import Social from './Social'
import VerticalLine from './VerticalLine'
import Features from './Features'
import Navigation from './Navigation'
import Icon from './Icon'

import { BsList, BsXLg } from 'react-icons/bs'

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggle(){
    setIsMenuOpen(prevIsMenuOpen => !isMenuOpen)
  }

  const isWide = useMedia('(min-width: 550px)')

  return (
    <React.Fragment>
      <nav className='navbar z-10 absolute top-0 w-full bg-navbar shadow-sm px-[5vw] flex justify-between rtl:flex-row-reverse items-center text-white py-4 xs:py-0'>
        <div className='navbar--icons flex rtl:flex-row-reverse items-center justify-between max-w-xs space-x-3'>
          <Social />
          <VerticalLine />
          <Features />
        </div>
        {
          isMenuOpen
          ? !isWide && 
            <Icon className="z-10"> 
              <BsXLg  
                onClick={handleToggle}
                size="20px"/>
            </Icon>
          : !isWide && 
            <Icon>
              <BsList 
                onClick={handleToggle}
                size="28px"/>
            </Icon>
        }
        {
          !isWide && isMenuOpen && 
          <Navigation className="absolute top-0 right-0 animate-open bg-slate-500 w-full"/>
        }
        <Navigation className="hidden xs:block"/>
      </nav>
    </React.Fragment>
  )
}

export default Navbar