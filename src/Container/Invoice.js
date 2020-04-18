import React, {useState , useContext} from 'react';
import Filters from '../Components/Filters/Filters';
import Table from '../Components/Table/Table';
import { InvoiceContext} from '../Context/InvoiceContext';

const Invoice = () => {
  const [invoices, setInvoices] = useContext(InvoiceContext);
  // console.log(invoices);

  //setting state for filter
  const [filters, setFilters] = useState({
    invoices: null,
    isFilter: false,
  });

  //Month Filter
  const monthFilterHandler = (month) => {
    let array = invoices;
    // console.log(array);
    // console.log(month);
    if (filters.isFilter) {
      array = filters.invoices;
      console.log(array);
    }
    const filtered = array.filter(function (a) {
      let monthitem = new Date(a.date);
      monthitem = monthitem.getMonth();
      // console.log(monthitem)
      return monthitem ==  month;
    });
    console.log(filtered);
    setFilters({ invoices: null });
    setFilters({ invoices: filtered, isFilter: true });
  };

  //Date Filter
  const dateFilterHandler = (date) => {
    let array = invoices;
    // console.log(array);
    if (filters.isFilter) {
      array = filters.invoices;
    }
    const filtered = array.filter(function (a) {
      let dateitem = new Date(a.date);
      dateitem = dateitem.getDate();
      return dateitem == date;
    });
    setFilters({ invoices: null });
    setFilters({ invoices: filtered, isFilter: true });
  };

  //Year Filter
  const yearFilterHandler = (year) => {
    let array = invoices;
    // console.log(array);
    if (filters.isFilter) {
      array = filters.invoices;
    }
    const filtered = array.filter(function (a) {
      let yearitem = new Date(a.date);
      yearitem = yearitem.getFullYear();
      return yearitem == year;
    });
    setFilters({ invoices: null });
    setFilters({ invoices: filtered, isFilter: true });
  };

  //view All
  const viewALLHandler = () => {
    setFilters({ isFilter: false });
  };

  //delete Handler 
  const deleteHandler = (id) => {
    const filtered = invoices;
    //console.log(filtered);
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].id == id) {
        filtered.splice(i, 1);
      }
    }
    setFilters({ invoices: filtered, isFilter: true });
  };

  //Update Handler
  const updateHandler = (id) => {
    const filtered = invoices;
    // console.log(filtered);
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].id == id) {
        console.log(filtered[i].id);
        filtered[i].invoice_no = document.getElementById('invoice_no').value;
        filtered[i].name = document.getElementById('name').value;
        filtered[i].company = document.getElementById('company').value;
        filtered[i].date = document.getElementById('date').value;
        filtered[i].amount = document.getElementById('amount').value;
      }
    }
    setFilters({ invoices: filtered, isFilter: true });
  };

  return (
    <div>
      <Filters
        dateFilter={dateFilterHandler}
        monthFilter={monthFilterHandler}
        yearFilter={yearFilterHandler}
        viewAllFilter={viewALLHandler}
      />
      {filters.isFilter ? (
        <Table invoices={filters.invoices} 
         deleteClick={deleteHandler}
         updateClick={updateHandler}/>
      ) : (
        <Table invoices={invoices}
         deleteClick={deleteHandler}
         updateClick={updateHandler} />
      )}
    </div>
  );
};

export default Invoice;