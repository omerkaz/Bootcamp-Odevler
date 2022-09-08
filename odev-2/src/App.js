import { useState, useEffect } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";

function App() {
  let initialValue = JSON.parse(localStorage.getItem("userList")) || [];

  const [textArray, setTextArray] = useState(initialValue);

  function handleFormSubmit(event, text) {
    event.preventDefault();
    setTextArray([...textArray, text]);
  }

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(textArray));
  });

  function clearList() {
    localStorage.removeItem("userList");
    setTextArray([]);
  }

  return (
    <div>
      <Form funct={handleFormSubmit} />
      <ItemsList list={textArray} function={clearList} />
    </div>
  );
}

export default App;
