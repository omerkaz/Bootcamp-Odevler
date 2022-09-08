import IncomeChart from "./IncomeChart";
import ExpenseChart from "./ExpenseChart";
import BalanceChart from "./BalanceChart";
import AddTransactionInput from "./AddTransactionInput";
export default function Main() {
  return (
    <>
      <div className="container">
        <div className="row offset-2">
            <div className="col-5">
            <IncomeChart></IncomeChart>
            </div>
            <div className="col-5">
            <ExpenseChart></ExpenseChart>   
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center mb-5">
            <BalanceChart></BalanceChart>
            </div>
        </div>
        <div className="row">
            <div className="col-6 offset-3">
                <AddTransactionInput></AddTransactionInput>
            </div>

        </div>
        
      </div>
    </>
  );
}
