import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:4000/test`);
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
