import { React, useEffect, useState } from "react";

const HomePage = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken((data) => localStorage.getItem("token"));
  }, []);

  const compo1 = token ? <h1>login</h1> : <h1>logout</h1>;

  return compo1;
};

export default HomePage;
