import { useState } from "react";
import "./../index.css";

function Form(props) {
  const [textInput, setTextInput] = useState("");

  const formSubmit = (e) => {
    props.funct(e, textInput);
    setTextInput("");
  };

  return (
    <form class="form-component" onSubmit={(e) => formSubmit(e)}>
      <div class="form-header">
        <h1>To-Do List</h1>
      </div>
      <div class="text-input">
        <input
          type="text"
          placeholder="      Write something..."
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
      </div>
      <div className="form-button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
