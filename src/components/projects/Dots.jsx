import React from 'react'

function Dots(props) {
  let dots = []
  for (let i = 0; i < props.length; i++) {
    dots.push(
      <div 
        className={`
          rounded-full
          w-6 
          h-6 
          ${props.active===i ? "bg-zinc-800" : "bg-zinc-500"}`}
      ></div>
    )
  }

  return (
    <div className='flex space-x-2 my-4 justify-center'>
      {
        ...dots
      }
    </div>
  )
}

export default Dots