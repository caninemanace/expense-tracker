import { useState } from "react";
function Formfiller({onAddExpense}){
    const [formData,setFormData]=useState({
        expense:"",
        description:"",
        type:"",
        date:"",
        amount:""
      })

      function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }

      function handleSubmit(e) {
        e.preventDefault();
        onAddExpense(formData);
        setformData({
          expense: "",
          description: "",
          type: "",
          date: "",
        });
      }
    return(
    <>
        <form onSubmit={handleSubmit}>
        <h1>ADD EXPENSE</h1>
            <label htmlFor="">Expense:</label>
            <input placeholder="Expense..." type="text" name="expense" value={formData.expense} onChange={handleChange}/><br/>
            <label htmlFor="">Description:</label>
            <input placeholder="Description..." type="text" name="description" value={formData.description} onChange={handleChange}/><br/>
            <label htmlFor="">Type:</label>
            <input placeholder="Type..." type="text" name="type" value={formData.type} onChange={handleChange}/><br/>
            <label htmlFor="">Date:</label>
            <input placeholder="Date..." type="date" name="date" value={formData.date} onChange={handleChange}/><br/>
            <label htmlFor="">Amount:</label>
            <input placeholder="Amount..." type="number" name="amount" value={formData.amount} onChange={handleChange}/>

            <button type="submit" onClick={handleSubmit}>SUBMIT</button>
        </form>
    </>
    )
}
export default Formfiller;