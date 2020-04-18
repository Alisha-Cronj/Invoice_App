import React, { Component } from 'react';
import './App.css';
// import Filters from './Components/Filters/Filters';
// import Table from './Components/Table/Table';
import Invoice from './Container/Invoice';
import { InvoiceProvider } from './Context/InvoiceContext';

class App extends Component {
  render() {
    return (
      <InvoiceProvider>
        <div className="App">
        {/* <Filters />
        <Table /> */}
        <Invoice />
      </div>
      </InvoiceProvider>
    );
  }
}

export default App;
