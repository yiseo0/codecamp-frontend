/* 
   3. state를 활용하여 인증번호 생성하기
   인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시 인증번호를 만들어서
   인증번호 6자리가 변경되도록 적용해 주세요.
   1-1) let과 document.getElementById()를 사용해 주세요.
   1-2) state를 사용해 주세요.
*/

import { useState } from "react"

export default function AuthNumber() {
   const [number, setNumber] = useState('000000')

   const random = () => {
      let randomNum = Math.floor((Math.random() * 1000000))
      return '' + randomNum
   }

   const onClick = () => {
      setNumber(random())
   }

   return (
      <>
         <p>인증번호 6자리 "{number}"</p>
         <button onClick={onClick}>인증번호전송</button>
      </>
   );
}
