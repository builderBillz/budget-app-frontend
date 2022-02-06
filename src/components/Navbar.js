import { Link } from "react-router-dom";
import "../index.css";
 
function NavBar() {
  return (
    <div className="navBar">
      <button className="navButton">
        <Link to="/">Home Page</Link>
      </button>
      <button className="navButton">
        <Link to="/transactions/">All Transactions</Link>
      </button>
      <button className="navButton">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </div>
  );
}

export default NavBar;