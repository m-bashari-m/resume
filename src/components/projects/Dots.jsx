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
          mx-1
          ${props.active===i ? "bg-zinc-800" : "bg-zinc-500"}`}
      ></div>
    )
  }

  return (
    <div className='flex my-4 justify-center rtl:flex-row-reverse'>
      {
        ...dots
      }
    </div>
  )
}

export default Dots