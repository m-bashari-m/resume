import React from 'react'
import Icon from './Icon'
import { BsTelegram, BsLinkedin, BsGithub } from 'react-icons/bs'


const icons = [
    {
      icon: <BsLinkedin size="24px"/>,
      url: "https://linkedin.com/in/mojtaba-bashari"
    },
    {
      icon: <BsGithub size="24px"/>,
      url: "https://github.com/m-bashari-m/",
    },
    {
      icon: <BsTelegram size="24px"/>,
      url: "https://t.me/M_B_42",
    },
  ]

function Social() {
  return (
    <div className='social flex justify-between rtl:flex-row-reverse'>
      {
        icons.map((icon, index) => {
          return (
            <a key={index} href={icon.url} target='_blank'>
              <Icon className="p-3">
                {icon.icon}
              </Icon>
            </a>
            )
        })
      }
      
    </div>
  )
}

export default Social