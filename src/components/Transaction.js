import {Link} from "react-router-dom";

function Transaction({ transaction, index }) {


  return (
    
    <tr>
        <td> {transaction.date}</td>
        <td><Link to={`/transactions/${index}`}>{transaction.from}</Link>
        </td>
        <td>{transaction.amount}</td>
        <td>{transaction.source}</td>
        <td>{transaction.category} </td>
        <td ><Link to={`/transactions/${index}/edit`}>✍️</Link></td>
    </tr>
  );
};  

export default Transaction