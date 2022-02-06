import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewTransaction() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState({
    date: "",
    source: "",
    amount: 0,
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/transactions`, transaction).then(() => {
      navigate("/transactions");
    });
  };

  const handleSelectChange = (event) => {
      const {value, id} = event.target
      setTransaction({...transaction, [id]: [value]  })
  }

  return (
    <div className="newTransaction">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <pre></pre>
        <label htmlFor="source">Account type</label>
        <input
          id="source"
          type="text"
          value={transaction.source}
          onChange={handleTextChange}
          placeholder="Checking, Savings......."
          required
        />
        <br />
        <br />
        <pre></pre>
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="Where is this transaction from?"
          required
        />
        <br />
        <br />
        <pre></pre>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          min=""
          step="100"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder= "$0.00"
        />
        <br />
        <br />
        <pre></pre>
        <label htmlFor="category">Category:</label>
        <select value={transaction.category} id="category" onChange={handleSelectChange} >
          <option value="Misc">Misc</option>
          <option value="Household">Household</option>
          <option value="Recurring">Recurring</option>
          <option value="Income">Income</option>
          <option value="Credit Cards">Credit Card</option>
          <option value="Utilities">Utilities</option>
          <option value="Investment">Investment</option>
        </select>
        <br />
        <br />
        <input className="button" type="submit"/>
      </form>
    </div>
  );
}

export default NewTransaction;