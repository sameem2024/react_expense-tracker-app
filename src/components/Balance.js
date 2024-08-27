import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

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

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const balance = amounts.reduce((acc,item) => (acc += item),0);
    //console.log(typeof amounts);
    //console.log(balance);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{moneyFormatter(balance)}</h1>
        </>
    )
}

export default Balance