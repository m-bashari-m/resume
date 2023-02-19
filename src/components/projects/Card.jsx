import React from 'react'
import Badge from './Badge'
import Github from './Github'

function Card(props) {  
  return (
    <div className={`card rounded-xl overflow-hidden max-h-[650px] xs:h-[550px] flex xs:flex-row flex-col-reverse`}>
      <div className={`xs:w-[800px] ${props.bg} py-2 xs:py-8 px-6 xs:px-10 xs:min-w-[300px]`}>
        <h1 className='text-2xl font-bold text-white break-words xs:text-3xl'>{props.title}</h1>

        <div className='flex flex-wrap my-2 xs:my-4'>
          {
            props.badges.map((title, index) => {
              return <Badge key={index} title={title} />
            })
          }
        </div>

        <p className='text-lg text-gray-200 xs:leading-8'>{props.description}</p>
      </div>
      
      <Github source={props.source} demo={props.demo} bg={props.bg}/>

      <div className='overflow-hidden relative group'>

        <img
          className=" group-hover:scale-105 transition duration-500 xs:h-full object-cover"
          src={props.image}
          alt="An image of the project" />

        <div
          className={`xs:bg-gradient-to-r bg-gradient-to-t ${props.bgGradient} absolute top-0 left-0 w-full h-full z-10`}></div>
        </div>
    </div>
  )
}

export default Card