import React from 'react';

const placeholders = {
  "day": "DD",
  "month": "MM",
  "year": "YYYY",
}



export default function FormInput({input, unit, placeholder, handleChange}) {
  const id = `${unit}-input`
  return (
    <div className={`form-input ${input.error && "error"}`}>
      <label className="form-input__label" htmlFor={id}>{unit}</label>
      <input className="form-input__input" type="text" id={id} placeholder={placeholders[unit]} value={input.value ?? ""} onChange={e => handleChange(unit, e.target.value)}/>
      <span className="form-input__error">{input.error}</span>
    </div>
  )
}