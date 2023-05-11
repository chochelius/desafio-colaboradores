import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import database from './data/colaboradores';
import Nav from './components/Nav';
import List from './components/List';
import Insert from './components/Insert';

function App() {
  const [colaboradores, setColaboradores] = useState(database);
  const [search, setSearch] = useState('');

  const handleSearchChange = (value) => {
    setSearch(value);
  }
  const handleInsert = (colaborador) => {
    const updateColaborador={
      ...colaborador,
      id: colaboradores.length + 1
    }
    setColaboradores([...colaboradores, updateColaborador]);
  }
  return (
      <div className="App">
        <Nav onSearchChange={handleSearchChange} />
        <div className="container">
        <Insert onSubmit={handleInsert}/>
          <List colaboradores={colaboradores} searchTerm={search} />
        </div>
      </div>
    );
}
export default App;