
export default function Child1(props: any): JSX.Element {
   const onClick = (): void => {
      props.setCount((prev: number) => prev + 1);
   };
   return (
      <>
         <div>자식 1의 카운트 : {props.count}</div>
         <button onClick={onClick}>카운트</button>
      </>
   );
}