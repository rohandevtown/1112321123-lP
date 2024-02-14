import React, { useState } from "react";

const FunctionalComponent = ({ name, number, company, setName }) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");

  const subtractByOne = () => {
    setCount(count - 1);
  };

  // const { name, number, company, setName } = props;

  return (
    <div>
      <h2>This is my functional component</h2>
      <button onClick={() => setCount(count + 1)}>
        Click on me to increment by ++1
      </button>
      <button onClick={subtractByOne}>Click on me to decrement by --1</button>
      <h1>{count}</h1>
      <h1>
        My name is {name}, I am {number} and i work for
        {company}
      </h1>
      <input type="text" onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}>Change name</button>
    </div>
  );
};

export default FunctionalComponent;
