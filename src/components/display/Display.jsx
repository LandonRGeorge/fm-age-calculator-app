import React from 'react';
import DisplayLine from './DisplayLine'

export default function Display({years, months, days}) {
  return (
    <div>
      <DisplayLine value={years} unit="years" />
      <DisplayLine value={months} unit="months" />
      <DisplayLine value={days} unit="days" />
    </div>
  )
}