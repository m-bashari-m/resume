import React, { useReducer } from 'react'
import FullScreenSection from '../screen/FullScreenSection'
import Centralized from '../screen/Centralized'
import Card from './Card'
import Dots from './Dots'
import { data } from "../../data/projects"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

function reducer(state, action){
  if (action.type === 'increment'){
    if (state+1 === data.length){
      return 0
    }else{
      return state+1
    }
  }else if(action.type === 'decrement'){
    if (state === 0){
      return data.length-1
    }else{
      return state-1
    }
  }
}

function Projects() {
  const [index, dispatch] = useReducer(reducer, 0)
  const project = data[index];

  return (
    <FullScreenSection bg="bg-slate-600" className="relative" id='projects'>
      <Centralized className={`w-10/12 max-w-[1000px]`}>
        <div className="projects--arrow xs:hover:animate-leftToRight -left-[20px]">
          <BsArrowLeftCircleFill 
            size="40px"
            onClick={() => dispatch({ type: 'decrement'})}
          />
        </div>

        <div className="projects--arrow xs:hover:animate-rightToLeft -right-[20px]">
          <BsArrowRightCircleFill 
            size="40px"
            onClick={() => dispatch({ type: 'increment'})}
          />
        </div>

        <Card {...project}/>

        <Dots length={data.length} active={index}/>

      </Centralized>
    </FullScreenSection>
  )
}

export default Projects