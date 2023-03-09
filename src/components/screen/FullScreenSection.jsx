import React from 'react'

function FullScreenSection(props) {
  return (
    <div className={`${props.bg}`} id={props.id}>
      <div className={`${props.className} max-w-[1400px] min-h-screen mx-auto`}>
        {props.children}  
      </div>
    </div>
  )
}

export default FullScreenSection