import React from 'react'

export default function DisplayLine({value, unit}) {
  return (
    <div>
      <span>{value}</span><span>{unit}</span>
    </div>
  )
}