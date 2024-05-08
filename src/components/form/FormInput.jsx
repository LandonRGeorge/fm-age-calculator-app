import React from 'react';

const placeholders = {
  "day": "DD",
  "month": "MM",
  "year": "YYYY",
}



export default function FormInput({input, unit, placeholder, handleChange}) {
  const id = `${unit}-input`
  return (
    <div>
      <label htmlFor={id}>{unit}</label>
      <input type="text" id={id} placeholder={placeholders[unit]} value={input.value ?? ""} onChange={e => handleChange(unit, e.target.value)}/>
      {input.error}
    </div>
  )
}