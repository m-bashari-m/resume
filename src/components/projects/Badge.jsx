import React from 'react'
import {data} from "../../data/badges"

function Badge(props) {
  const badge = data[props.title]

  return (
    <div className={`px-4 py-1 bg- font-bold m-1 text-sm ${badge.classes} rounded-full`}>
      {badge.title}
    </div>
  )
}

export default Badge