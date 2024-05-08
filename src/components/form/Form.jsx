import React from 'react';
import FormInput from './FormInput.jsx'

export default function Form({handleFormChange, inputs}) {

  return (
    <form>
      <FormInput input={inputs.year} unit="year" handleChange={handleFormChange}/>
      <FormInput input={inputs.month} unit="month" handleChange={handleFormChange}/>
      <FormInput input={inputs.day} unit="day" handleChange={handleFormChange}/>
    </form>
  )
}
