import "../index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionDetails() {
    const URL = process.env.REACT_APP_API_URL;
    const [transaction, setTransaction] = useState([]);
    const navigate = useNavigate();
    let {index} = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
          console.log(response.data)
        setTransaction(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, [URL,index]);

  const handleDelete = () => {
    axios
    .delete(`${URL}/transactions/${index}`)
    .then(() => { 
    navigate("/transactions");
    });
  };

  return (
    <div>
        <table className="detailsTable">
        <tbody>
            <tr>
            <th>Date</th>
            <th>From</th>
            <th>Category</th>
            <th>Account</th>
            <th>Amount</th>
            </tr>
            <tr>
            <td>{transaction.date} </td>
            <td>{transaction.from} </td>
            <td>{transaction.amount} </td>
            <td>{transaction.source} </td>
            <td>{transaction.category} </td>
            </tr>
        </tbody>
        </table>
        <br />
        <div className="detailsNav">
            <div>
                <Link to={"/transactions"}>
                <button className="transactionButton">Back</button>
                </Link>
            </div>
            <br />
             <div>
                <Link to={`/transactions/${index}/edit`}>
                <button className="transactionButton">Edit</button>
             </Link>
             </div>
            <br />
             <div>
                <button className="transactionButton" onClick={handleDelete}>
                Delete
                </button>
            </div>
            <br />
        </div>
    </div>
  );
}

export default TransactionDetails;