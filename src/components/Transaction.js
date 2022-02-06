import {Link} from "react-router-dom";

function Transaction({ transaction, index }) {


  return (
    
    <tr>
        <td> {transaction.date}</td>
        <td>
            <a href={`/transactions/${index}`} rel="from">
            {transaction.from}
            </a>
        </td>
        <td>{transaction.amount}</td>
        <td>{transaction.source}</td>
        <td>{transaction.category} </td>
        <td ><Link to={`/transactions/${index}/edit`}>✍️</Link></td>
    </tr>
  );
};  

export default Transaction