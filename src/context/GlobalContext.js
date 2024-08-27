import {createContext,useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
    transactions:[
        {id:1,text:'income',amount:100},
        {id:2,text:'expense',amount:-50},
        {id:3,text:'income',amount:90},
    ]
};



export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,initialState);
    

    const amounts = state.transactions.map(transaction => transaction.amount);
   // console.log(amounts);

    const income = amounts.filter
    (item => item > 0 ).reduce((acc,item) => (acc += item),0);
   

    const expense = amounts.filter
        (item => item < 0 ).reduce((acc,item) => (acc += item),0) * -1;
   
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    function DeleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function moneyFormatter(number) {
        let p = Number(number).toFixed(2).split('.');
        
        return (
            '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
            p[0]
              .split('')
              .reverse()
              .reduce(function (acc, num, i) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
              }, '') +
            '.' +
            p[1]
          );
    }

    
  return (
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        addTransaction,
        DeleteTransaction,
        moneyFormatter,income,expense
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

