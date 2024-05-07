import React from 'react';
import FormInput from './FormInput.jsx'

export default function Form({handleFormChange}) {

  return (
    <form>
      <FormInput unit="day" placeholder="DD" handleChange={handleFormChange}/>
      <FormInput unit="month" placeholder="MM" handleChange={handleFormChange}/>
      <FormInput unit="year" placeholder="YYYY" handleChange={handleFormChange}/>
    </form>
  )
}
