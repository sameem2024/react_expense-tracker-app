import { GlobalContext } from "../context/GlobalContext";
import TransactionList from "./TransactionList";
import { useContext } from "react";

const Transaction = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <TransactionList key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}

export default Transaction