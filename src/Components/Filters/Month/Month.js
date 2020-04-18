import React from 'react';
// import classes from '../Filter.css';

const Month = (props) =>{
  return(
    <div>
    <select className="dropdown" onChange={(event) => props.monthFilter(event.target.value)}>
      <option value="month">Month</option>
      <option value="0">January</option>
      <option value="1">February</option>
      <option value="2">March</option>
      <option value="3">April</option>
      <option value="4">May</option>
      <option value="5">June</option>
      <option value="6">July</option>
      <option value="7">August</option>
      <option value="8">September</option>
      <option value="9">October</option>
      <option value="10">November</option>
      <option value="11">December</option>
    </select> 
    </div>
  );
}
export default Month;