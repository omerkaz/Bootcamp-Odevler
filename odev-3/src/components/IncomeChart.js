import { useContext } from "react";
import { Chart } from "react-google-charts";
import { GlobalContext } from "../context/GlobalState";

function IncomeChart() {
  const { transactions } = useContext(GlobalContext);

  const filteredTransactions = transactions.filter((item) => item.amount > 0);

  const data = [
    ["Text", "Amount"],
    filteredTransactions.length == 0 ? ["Empty", 0] : ["Empty", 0],
  ];

  filteredTransactions.map((item) =>
    data.push([item.text.toString(), Number(item.amount)])
  );

  console.log(data);

  const options = {
    title: "Income",
    titleTextStyle : {
      fontSize: 24
    }
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}
export default IncomeChart;
