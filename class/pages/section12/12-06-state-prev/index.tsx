import { useState } from "react";

export default function counterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  console.log("test")

  const onClick = (): void => {
    setCount((prev) => count + 1);
    setCount((prev) => count + 1);
    setCount((prev) => count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClick}>카운트</button>
    </>
  );
}
