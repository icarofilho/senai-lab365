import axios from "axios";
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const s = async () => {
    const d = await axios
      .get("https://rickandmortyapi.com/api/character/2")
      .then((r) => setData((d) => [...d, r.data]));
  };

  s();
  console.log(data);

  return <></>;
}

export default App;
