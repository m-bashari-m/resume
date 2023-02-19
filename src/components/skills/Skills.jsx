import React from 'react'
import FullScreenSection from "../screen/FullScreenSection"
import Centralized from "../screen/Centralized"
import {data} from "../../data/skills"
import ProgressBar from './ProgressBar'

function Skills() {
  return (
    <FullScreenSection className="relative" bg="bg-slate-500">
      <Centralized className="w-full">
        <div className='skills grid grid-cols-1 xs:grid-cols-2 gap-6 mx-auto max-w-9/10 w-[600px] items-center'>
          {
            data.map((skill, index) => 
            <ProgressBar 
              key={index} 
              fill={skill.rate} 
              title={skill.skill}
              image={skill.image}
              alt={skill.alt}
            />)
          }
        </div>
      </Centralized>
    </FullScreenSection>
  )
}

export default Skills