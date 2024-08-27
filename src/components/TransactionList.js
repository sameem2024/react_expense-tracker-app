import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";



const TransactionList = ({transaction}) => {
  const {DeleteTransaction,moneyFormatter} = useContext(GlobalContext)
  const sign = transaction.amount > 0 ? '+' : null;
  return (
    <li key={transaction.id} className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}
      <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => DeleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default TransactionList