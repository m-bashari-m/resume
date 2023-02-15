import React from 'react'

function Icon(props) {
  return (
    <div className={`icon cursor-pointer hover:xs:bg-hover p-2 mx-1 rounded-full transition duration-500 filter grayscale hover:filter-none ${props.className}`} >
      {props.children}
    </div>
  )
}

export default Icon