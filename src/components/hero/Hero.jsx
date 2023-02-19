import React from 'react'
import FullScreenSection from '../screen/FullScreenSection'
import Centralized from '../screen/Centralized'
import Avatar from './Avatar'
import { withTranslation } from 'react-i18next'

function Hero(props) {
  return (
    <FullScreenSection 
    bg="bg-slate-700"
    className="relative">
      <Centralized>
        <div id='about'>
          <Avatar/>
        </div>
      </Centralized>
    </FullScreenSection>
  )
}

export default Hero