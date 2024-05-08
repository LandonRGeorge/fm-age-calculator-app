import React from 'react';
import DisplayLine from './DisplayLine'

export default function Display({outputs}) {
  return (
    <div>
      <DisplayLine value={outputs.years} unit="years" />
      <DisplayLine value={outputs.months} unit="months" />
      <DisplayLine value={outputs.days} unit="days" />
    </div>
  )
}