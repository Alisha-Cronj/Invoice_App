import React from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';

const Button = ({ id }) => {
  
  const EditHandler = (e, id) => {
    e.preventDefault();
    console.log(id);
  };
  const DeleteHandler = (e, id) => {
    e.preventDefault();
    console.log(id);
  };
  return (
    <Aux>
      {/* <button>...</button> */}
      <button onClick={(e) => EditHandler(e, id)}>Edit</button>
      <button onClick={(e) => DeleteHandler(e, id)}>Delete</button>
    </Aux>
  );
};

export default Button;
