import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { url } from "./network";

function App() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${url}/test`);
    setInfo(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>REACT FULL STACK APPLICATION</h1>
      <div>
        {info.name} - {info.age}
      </div>
    </div>
  );
}

export default App;
