import { useState } from "react";

export default function counterStatePage() {
  const [count, setCount] = useState(0);

  console.log("test")

  const onClick = () => {
    setCount(100);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClick}>카운트</button>
    </>
  );
}
