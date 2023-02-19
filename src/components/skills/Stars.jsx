import React from 'react'

function Stars(props) {
  const nFill = props.fill + 1
  return (
    <div className='stars flex space-x-1 -top-[2px] relative hover:cursor-default select-none'>
      {[...Array(5)].map((_, index) => {        
        return (         
          <span 
            key={index}
            className={`star text-2xl ${props.fill > index ? 'text-yellow-400' : 'text-white'}`}>
            &#9733;
          </span>        
        );
      })}
    </div>
  )
}

export default Stars