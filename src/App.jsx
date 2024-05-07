import React from 'react';
import Form from './components/form/Form'
import Display from './components/display/Display'

function interval(date1, date2) {
  if (date1 > date2) { // swap
    var result = interval(date2, date1);
    result.years  = -result.years;
    result.months = -result.months;
    result.days   = -result.days;
    return result;
  }
  result = {
    years:  date2.getYear()  - date1.getYear(),
    months: date2.getMonth() - date1.getMonth(),
    days:   date2.getDate()  - date1.getDate()
  };
  if (result.days < 0) {
    result.months--;
    // days = days left in date1's month,
    //   plus days that have passed in date2's month
    var copy1 = new Date(date1.getTime());
    copy1.setDate(32);
    result.days = 32-date1.getDate()-copy1.getDate()+date2.getDate();
  }
  if (result.months < 0) {
    result.years--;
    result.months+=12;
  }
  return result;
}


function App() {
  const [inputs, setInputs] = React.useState({
    day: null,
    month: null,
    year: null,
  })

  console.log(inputs)

  function handleFormChange(unit, value) {
    setInputs(prevState => {
      return {
        ...prevState,
        [unit]: +value,
      }
    })
  }

  const date2 = new Date(inputs.year, inputs.month-1, inputs.day)
  console.log(date2)
  const {years, months, days} = interval(date2, new Date())


  return (
    <>
      <Form handleFormChange={handleFormChange}/>
      <Display years={years} months={months} days={days}/>
    </>
  )
}

export default App
