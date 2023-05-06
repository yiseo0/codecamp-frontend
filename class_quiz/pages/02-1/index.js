/*
   1. state를 활용하여 안녕하세요 ⇒ 반갑습니다 로 변경하기
   "안녕하세요"라는 버튼을 만들고, 버튼 클릭시 "반갑습니다" 로 변경해 보세요
   1-1) let과 document.getElementById()를 사용해 주세요.
   1-2) state를 사용해 주세요.
*/
import React, { useState } from 'react';

export default function ChangeButton() {
   const [text, setText] = useState('안녕하세요')

   return (
      <>
         <button type="button" onClick={() => setText('반갑습니다')}>{text}</button>
      </>
   );
}
