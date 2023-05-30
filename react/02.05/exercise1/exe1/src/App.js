import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [resource, setResource] = useState("Posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        setItems(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [resource]);

  const handleClick = (type) => {
    setResource(type);
  };

  return (
    <div className="display">
      <h1>{resource}</h1>
      <button onClick={() => handleClick("Posts")}>Posts</button>
      <button onClick={() => handleClick("Users")}>Users</button>
      <button onClick={() => handleClick("Comments")}>Comments</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
