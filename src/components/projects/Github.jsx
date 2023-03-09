import React from 'react'

function Github(props) {
  return (
    <div className={`absolute z-30 right-8 flex items-center ${props.bg} text-white rounded-full -top-[15px] overflow-hidden shadow-xl`}>
      <a href={props.source} className='github--button ltr:border-r-2'>Source</a>
      <a href={props.demo} className='github--button rtl:border-r-2'>Demo</a>
    </div>
  )
}

export default Github