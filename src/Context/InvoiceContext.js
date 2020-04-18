import React, {useState, createContext} from 'react';

export const InvoiceContext = createContext();

export const InvoiceProvider = (props) => {
  const [invoices, setInvoices] = useState([
    {
      id : 1,
      invoice_no:'INV-01',
      name: 'Aditya',
      company: 'Abc Limited',
      date: '2021-01-20',
      amount: 25000
    },
    {
      id : 2,
      invoice_no:'INV-02',
      name: 'Adity',
      company: 'Abc Limited',
      date: '2020-12-16',
      amount: '20000'
    },
    {
      id : 3,
      invoice_no:'INV-03',
      name: 'Antil',
      company: 'Abc Limited',
      date: '2020-10-12',
      amount: 25000
    },
    {
      id : 4,
      invoice_no:'INV-04',
      name: 'Akshya',
      company: 'Abc Limited',
      date: '2020-12-10',
      amount: 30000
    },
    {
      id : 5,
      invoice_no:'INV-05',
      name: 'Karan',
      company: 'Abc Limited',
      date: '2029-06-26',
      amount: 25000
    },
    {
      id : 6,
      invoice_no:'INV-06',
      name: 'David',
      company: 'Abc Limited',
      date: '2027-05-27',
      amount: 30000
    },
    {
      id : 7,
      invoice_no:'INV-07',
      name: 'Duruk',
      company: 'Abc Limited',
      date: '2020-04-20',
      amount: 35000
    },
    {
      id : 8,
      invoice_no:'INV-08',
      name: 'Aarav',
      company: 'Abc Limited',
      date: '2021-04-19',
      amount: 25000
    },
    {
      id : 9,
      invoice_no:'INV-09',
      name: 'Aaruhi',
      company: 'Abc Limited',
      date: '2020-06-02',
      amount: 25000
    },
    {
      id : 10,
      invoice_no:'INV-10',
      name: 'Anmol',
      company: 'Abc Limited',
      date: '2022-08-30',
      amount: 25000
    },
  ]);
  return (
    <InvoiceContext.Provider value={[invoices, setInvoices]}>
      {props.children}
    </InvoiceContext.Provider>
  );
};
