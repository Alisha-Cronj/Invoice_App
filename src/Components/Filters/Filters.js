import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Filter.css'
import Date from './Date/Date';
import Month from './Month/Month';
import Year from './Year/Year';
import ViewAll from './ViewAll/ViewAll';

const Filters = (props) => {
  return (
    <Auxiliary>
      <div className="Filters">
      <Date dateFilter={props.dateFilter} />
      <Month monthFilter={props.monthFilter}/> 
      <Year yearFilter={props.yearFilter} />
      <ViewAll viewAllFilter={props.viewAllFilter} />
    </div>
    </Auxiliary>
  );
};

export default Filters;
