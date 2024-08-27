import Chart from 'react-apexcharts';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

/* const options = {
    labels: ["Income", "Expense"],
    colors: ["#213ebf","#FD5E53"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
        type: "none", 
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#213ebf","#FD5E53"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  }; */


  const options = {
    labels:["income","expense"]
  }

 
  const TransactionChart = () => {
    
  const {income,expense} = useContext(GlobalContext);
  const series = [income,expense];
   
  return (
   <div>
    <Chart
      options={options}
      series={series}
      type = "pie"
      width="380"
    />
   </div>
  )
}

export default TransactionChart;