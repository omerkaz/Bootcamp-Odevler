import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransactionInput() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction, transactions } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  console.log(amount, transactions);

  return (
    <>
      <h3 className="text-center mb-2">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control d-flex items-align-center justify-content-center">
          <label className="me-3 fw-semibold" htmlFor="text">Text</label>
          <input
            className="border ms-2 w-50"
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control text-center">
          <label className="fw-semibold mb-3 me-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="border w-50"
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
          <br></br>
          <span>(negative - expense, positive - income)</span>
        </div>
        <div className="d-flex items-align-center justify-content-center mt-2">
          <button className="btn btn-primary">Add transaction</button>
        </div>
      </form>
    </>
  );
}
export default AddTransactionInput;
