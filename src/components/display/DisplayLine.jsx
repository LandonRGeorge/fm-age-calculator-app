import React from 'react'

export default function DisplayLine({value, unit}) {
  const valueDisplay = value || "--"
  return (
    <div className="display-line">
      <span className="display-line__value">{valueDisplay}</span><span className="display-line__unit">{unit}</span>
    </div>
  )
}