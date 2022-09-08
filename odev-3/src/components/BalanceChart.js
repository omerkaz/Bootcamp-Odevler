import { useContext } from "react";
import { Chart } from "react-google-charts";
import { GlobalContext } from "../context/GlobalState";

function BalanceChart() {
  const { transactions } = useContext(GlobalContext);

  const data = transactions.reduce((prevValue, currentValue) => {return prevValue + currentValue.amount}, 0)

  const options = {
    title: "Total Balance",
  };

  return (
    <h1>${data}</h1>
  );
}
export default BalanceChart;