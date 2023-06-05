export default function Child2(props: any): JSX.Element {
   return (
      <>
         <div>자식 2의 카운트 : {props.count}</div>
         <button onClick={props.onClick}>카운트</button>
      </>
   );
}