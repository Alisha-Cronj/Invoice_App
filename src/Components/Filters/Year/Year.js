import React from 'react';
// import classes from './Filter.css';

const Year = (props) =>{
  return(
    <div>
    <select className="dropdown" onChange={(event) => props.yearFilter(event.target.value)}>
      <option value="0">Year</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
      <option value="2028">2028</option>
      <option value="2029">2029</option>
      <option value="2030">2030</option>
    </select>
    </div>
  );
}
export default Year;