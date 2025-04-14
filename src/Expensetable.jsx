import React from "react";
import './App.css'
function Expensetable({expenses}){
    return(
    <div className=" table">
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.expense}</td>
              <td>{exp.description}</td>
              <td>{exp.type}</td>
              <td>{exp.date}</td>
              <td>{exp.amount}</td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>
    )
}
export default Expensetable;