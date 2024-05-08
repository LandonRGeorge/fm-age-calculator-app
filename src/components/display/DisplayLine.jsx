import React from 'react'

export default function DisplayLine({value, unit}) {
  const valueDisplay = value || "--"
  return (
    <div>
      <span>{valueDisplay}</span><span>{unit}</span>
    </div>
  )
}