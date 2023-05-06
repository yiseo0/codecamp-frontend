/*
   2. state를 활용하여 카운터 만들기
   0이라는 숫자와 "카운트올리기"라는 버튼을 만들고, 버튼 클릭시 숫자를 1씩 증가해 주세요.
   1-1) let과 document.getElementById()를 사용해 주세요.
   1-2) state를 사용해 주세요.
*/
import { useState } from "react"

export default function Counter() {
   const [count, setCount] = useState(0)
   const onClick = () => {
      setCount((count) => count + 1)
   }

   return (
      <>
         {count}
         <button onClick={onClick}>카운트 증가</button>
      </>
   );
}