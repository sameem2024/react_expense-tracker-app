import { useContext, useState } from "react";
import { GlobalContext } from '../context/GlobalContext';



const AddTransaction = () => {
  const { transactions, addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();
    const id = transactions.length ? transactions.length + 1 : 1;
    
    console.log(id);
    addTransaction({ id, text, amount });
    setText('');
    setAmount('');
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;



