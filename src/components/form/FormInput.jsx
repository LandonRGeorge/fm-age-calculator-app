import React from 'react';

export default function FormInput({unit, placeholder, handleChange}) {
  const id = `${unit}-input`
  return (
    <div>
      <label htmlFor={id}>{unit}</label>
      <input type="text" id={id} placeholder={placeholder} onChange={e => handleChange(unit, e.target.value)}/>
    </div>
  )
}