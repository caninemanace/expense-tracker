import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Formfiller from './Formfiller';
import Expensetable from './Expensetable';
import Searchbar from './Searchbar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }

  const handleDelete = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.expense.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Formfiller onAddExpense={addExpense} />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Expensetable expenses={filteredExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;

