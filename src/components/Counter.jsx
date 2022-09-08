import react, { useState, useEffect } from "react";

function Counter() {
  const [name, setName] = useState("anish");
  let name1 = "anish";
  console.log(name1);

  useEffect(() => {
    console.log("hello");
  }, [name]);

  function changeName() {
    setName("rushil");
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
  );
}

export default Counter;
