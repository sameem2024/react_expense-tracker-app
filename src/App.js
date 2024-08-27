import './App.css';

import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import TransactionChart from './components/Chart';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <>
   
    <Header />
    <section className='summary'>

     
      <GlobalProvider>
      
        <article>
            <Balance />
            <IncomeExpenses />
            <Transaction />
            <AddTransaction />
        </article>

        <article>
            <TransactionChart/>
        </article>
      
      </GlobalProvider>

     
    </section>
    </>
  );
}

export default App;
