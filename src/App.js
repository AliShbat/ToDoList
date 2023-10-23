import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const addValue = () => {
    const val = {
      id: Math.floor(Math.random() * 1000),
      value: value,
    };
    if (!value) {
      alert("pls write vlu");
      return;
    }
    setItems((oldlist) => [...oldlist, val]);
    setValue("");
    console.log(items);
  };
  const deletValue = (id) => {
    const Deletee = items.filter((item) => {
      return item.id !== id;
    });
    setItems(Deletee);
  };

  return (
    <div className="container text-center py-5">
      {/* LOGO */}
      <h1 className="pb-3">To Do List</h1>
      {/* INPUT AND BUTON SEND */}
      <input className="p-1 pb-2"
        type="text"
        placeholder="write your todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-danger" onClick={() => addValue()}>Send</button>
      {/* UL LIST */}
      <ul className="py-3">
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button className="mt-2" onClick={() => deletValue(item.id)}>
                <AiOutlineClose />
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
