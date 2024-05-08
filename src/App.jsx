import React from 'react';
import Form from './components/form/Form'
import Display from './components/display/Display'

function interval(date1, date2) {
  if (date1 > date2) { // swap
    var result = interval(date2, date1);
    result.years = -result.years;
    result.months = -result.months;
    result.days = -result.days;
    return result;
  }
  result = {
    years: date2.getYear() - date1.getYear(),
    months: date2.getMonth() - date1.getMonth(),
    days: date2.getDate() - date1.getDate()
  };
  if (result.days < 0) {
    result.months--;
    // days = days left in date1's month,
    //   plus days that have passed in date2's month
    var copy1 = new Date(date1.getTime());
    copy1.setDate(32);
    result.days = 32 - date1.getDate() - copy1.getDate() + date2.getDate();
  }
  if (result.months < 0) {
    result.years--;
    result.months += 12;
  }
  return result;
}

function generateErrorMsg(unit, value) {
  if (value === "") {
    return 'This field is required'
  }
  if (unit === "day" && (value < 0 || value > 31)) {
    return 'Must enter a valid day'
  }
  if (unit === "month" && (value < 0 || value > 12)) {
    return 'Must enter a valid month'
  }
  if (unit === "year") {
    if (value < 0) {
      return 'Must enter a valid year'
    }
    if (value > new Date().getFullYear()) {
      return 'Must enter a year that is not in the future'
    }
  }
  return ''
}


function App() {
  const [inputs, setInputs] = React.useState({
    day: {
      value: '1',
      error: "",
    },
    month: {
      value: '12',
      error: "",
    },
    year: {
      value: '1987',
      error: "",
    }
  })

  function handleFormChange(unit, value) {
    setInputs(prevState => {
      let newValue = isNaN(value) || value === " " ? prevState[unit].value : value;
      console.log('newValue', newValue)
      const error = generateErrorMsg(unit, newValue)
      return {
        ...prevState,
        [unit]: {
          value: newValue,
          error,
        }
      }
    })
  }

  let outputs = {}
  const inputDate = new Date(inputs.year.value, inputs.month.value - 1, inputs.day.value)
  const nowDate = new Date();
  if (!inputs.year.error && !inputs.month.error && !inputs.day.error) {
    outputs = interval(inputDate, nowDate)
  }
  console.log('inputs', inputs)
  console.log('outputs', outputs)


  return (
    <div className="app">
      <Form handleFormChange={handleFormChange} inputs={inputs}/>
      <Display outputs={outputs}/>
    </div>
  )
}

export default App
