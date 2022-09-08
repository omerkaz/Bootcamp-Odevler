import { useState } from "react";

function ItemsList(props) {
  const [filter, setFilter] = useState("");
  const [done, setDone] = useState([]);

  function completeElement(index) {
    setDone([...done, index]);
  }

  function uncompleteElement(index) {
    setDone(
      done.filter((todo) => {
        if (todo === index) {
          return false;
        }
        return true;
      })
    );
  }

  function clearDone() {
    setDone([]);
    props.function();
  }

  return (
    <>
      <div className="list-container">
        <div className="filter-input">
          <h3>Your List</h3>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="form-button">
          <button onClick={clearDone}>Reset</button>
        </div>
        <ul className="items-list">
          {props.list
            .filter((item) => {
              if (filter !== "") {
                return item.includes(filter);
              } else {
                return true;
              }
            })
            .map((item, index) => {
              if (done.includes(index)) {
                return (
                  <li
                    onClick={() => uncompleteElement(index)}
                    className="terminato"
                    key={index}
                  >
                    {item}
                  </li>
                );
              }
              return (
                <li onClick={() => completeElement(index)} key={index}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default ItemsList;
