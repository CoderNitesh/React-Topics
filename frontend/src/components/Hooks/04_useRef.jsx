import React, { useRef, useState } from "react";

export default function UseRefHook() {
  const [name, setName] = useState("Nitesh");
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    if(inputRef.current.value){
        setName(inputRef.current.value);
    }
    inputRef.current.value = "";
  };
  
  return (
    <div>
      <h3>Name: {name}</h3>
      <input type="text" className="nitesh anant shetye" placeholder="Example...!" ref={inputRef} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}
