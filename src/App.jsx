import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Formfiller from './Formfiller'
import Expensetable from './Expensetable'

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }
  return (
    <>
      <Navbar/>
      <Formfiller onAddExpense={addExpense}/>
      <Expensetable expenses={expenses}/>
    </>
  )
}

export default App;
