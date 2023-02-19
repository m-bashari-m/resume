import React from 'react'

function Github(props) {
  return (
    <div className={`absolute z-30 right-8 flex justify-center items-center ${props.bg} text-white rounded-full -top-[15px] overflow-hidden flex-wrap`}>
      <a href={props.source} className='github--button border-r-2'>Source</a>
      <a href={props.demo} className='github--button'>Demo</a>
    </div>
  )
}

export default Github