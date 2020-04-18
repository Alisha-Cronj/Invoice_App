import React from 'react';
import Row from './Row/Row';
import './Table.css';

const Table= ({ invoices, deleteClick, updateClick}) => {
  return (
    <div className="TableContainer">
      <table className="Table">
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Client Name</th>
            <th>Company</th>
            <th>Submitted</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <Row
              key={invoice.id}
              values={invoice}
              deleteClick={deleteClick}
              updateClick={updateClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;