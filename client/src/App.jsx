import React from "react";

const App = () => {
  fetch("http://localhost:3001/api/getdummies")
    .then((res) => res.json())
    .then((res) => console.log(res));
  return <div></div>;
};

export default App;
