import React, { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";



function Transactions() {

    const URL = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
          .get(`${URL}/transactions`)
          .then((response) => {
              console.log(URL)
            setTransactions(response.data);
          })
          .catch((error) => console.log("catch", error));
      }, [URL]);

      const allAmounts = transactions.map((transaction) => transaction.amount);
      const total= allAmounts.reduce((prev,cur) =>Number(prev) + Number(cur),0); 


    return (

        
        <div className="transactions">
          <div>
            <h3>Balance: ${total} </h3>
          </div>
          <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>From</th>
                    <th>Amount</th>
                    <th>Account</th>
                    <th>Category</th>
                    <th>Edit</th>
                </tr>   
                {transactions.map((transaction, index) => {
                return (
                    <Transaction key={index} transaction={transaction} index={index} />
                    );
                })}
            </tbody>
          </table>
        </div>
      );
}

export default Transactions