import React from 'react';

const viewAll = (props) => {
  return (
    <div>
      <button className="dropdown btn-view" onClick={(event) => props.viewAllFilter(event.target.value)}>ViewAll</button>
    </div>
  );
};
 
export default viewAll;