import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionsEdit() {
    const URL = process.env.REACT_APP_API_URL;
    const [transaction, setTransaction] = useState({
        date: "",
        source: "",
        amount: 0,
        from: "",
        category: "",
      });
    const navigate = useNavigate();
    const {id} = useParams();

    console.log(id)

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`${URL}/transactions/${id}`, transaction)
    .then(() => 
    {navigate(`/transactions`)  
    })
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
      <Link to={`/transactions/${id}`}>
        <button>back</button>
        </Link>
    </div>
  );
}

export default TransactionsEdit;