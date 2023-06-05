import { useState } from "react";
import Child1 from "@/src/components/units/15-lifting-state-up/Child1";
import Child2 from "@/src/components/units/15-lifting-state-up/Child2";

export default function counterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);
  const onClick = (): void => {
    setCount((prev: number) => prev + 1);
  };
  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <hr />
      <Child2 count={count} setCount={setCount} onClick={onClick} />
    </>
  );
}
