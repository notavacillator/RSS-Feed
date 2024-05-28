import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log("Error in getting the articles " + error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return <></>;
}

export default App;
