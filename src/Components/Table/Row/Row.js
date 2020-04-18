  import React, {useState , useContext} from 'react';
  import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
  import {InvoiceContext} from '../../../Context/InvoiceContext';
  import Button from './Button/Button';
  import './Row.css';

  const Row = (props) => {
    const [edit, setEdit] = useState({
      isEdit: false,
      editId: null,
    });
    const deleteclicked = (e, id) => {
      e.preventDefault();
      props.deleteClick(id);
    };
    const editclicked = (e, id) => {
      e.preventDefault();
      setEdit({ isEdit: true, editId: id });
    };
    const updateClicked = (e, id) => {
      e.preventDefault();
      props.updateClick(id);
      setEdit({ isEdit: false });
    };
  
    return (
      <Auxiliary>
        {edit.isEdit ? (
          <InvoiceContext.Consumer>
            {(context) => (
              <Auxiliary>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="invoice_no"
                      id="invoice_no"
                      defaultValue={props.values.invoice_no}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={props.values.name}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      defaultValue={props.values.company}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="date"
                      id="date"
                      defaultValue={props.values.date}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      defaultValue={props.values.amount}
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn-edit"
                      onClick={(e) => updateClicked(e, props.values.id)}
                    >
                      update
                    </button>
                  </td>
                </tr>
              </Auxiliary>
            )}
          </InvoiceContext.Consumer>
        ) : (
          <tr>
            <td>{props.values.invoice_no}</td>
            <td>{props.values.name}</td>
            <td>{props.values.company}</td>
            <td>{props.values.date}</td>
            <td>{props.values.amount}</td>
            <td>
              <button
                className="btn-edit"
                onClick={(e) => editclicked(e, props.values.id)}
              >
                Edit
              </button>
              <button
                className="btn-delete"
                onClick={(e) => deleteclicked(e, props.values.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        )}
      </Auxiliary>
    );
  };
  
  export default Row;