import React from 'react'

const badges = {
  react: {
    title: "React",
    classes: "bg-slate-700 text-white"
  },

  api: {
    title: "API",
    classes: "bg-orange-400 text-white"
  },

  css: {
    title: "CSS",
    classes: "bg-cyan-300 text-white"
  }
}

function Badge(props) {
  const badge = badges[props.title]

  return (
    <div className={`px-4 py-1 bg- font-bold m-1 text-sm ${badge.classes} rounded-full`}>
      {badge.title}
    </div>
  )
}

export default Badge