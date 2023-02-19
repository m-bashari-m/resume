import React from 'react'
import Stars from "./Stars"

function ProgressBar(props) {
  return (
    <div className='flex items-center min-w-[250px] max-w-[800px] mx-auto rounded-lg bg-slate-900 p-4 justify-between scale-125 xs:scale-100 hover:xs:scale-110 transition duration-500'>
      <Stars fill={props.fill}/>
      <h2 className='ml-2 text-sm text-white'>{props.title}</h2>
      <img src={props.image} alt={props.alt} />
    </div>
  )
}

export default ProgressBar