/*
   4. state를 활용하여 회원가입 폼 만들기

   회원가입 화면을 다음의 조건에 맞게 만들어 주세요.
   (이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요.)
   각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요)에 저장해 주세요.
   4-1) state를 사용해 주세요.
   4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
      ⇒ 조건1) 이메일에 @가 없으면 에러입니다.
      ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
      ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
   4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.
 */
import { useState } from "react";
import styled from "@emotion/styled";

export default function Join() {
   const Error = styled.p`
      color: #f00;
   `

   const [user, setUser] = useState({
      email: '',
      pw: '',
      pwConfirm: '',
   })

   const [error, setError] = useState({
      email: false,
      pw: false,
      pwConfirm: false,
   })

   const onChange = e => {
      const { name, value } = e.target
      setUser({
         ...user,
         [name]: value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault()
      const { email, pw, pwConfirm } = user

      if (!email.includes('@')) {
         setError({ email: true, pw: false, pwConfirm: false })
         return false
      }
      if (!pw) {
         setError({ email: false, pw: true, pwConfirm: false })
         return false
      }
      if (pw !== pwConfirm) {
         setError({ email: false, pw: false, pwConfirm: true })
         return false
      }

      setError({
         email: '',
         pw: '',
         pwConfirm: '',
      })
   }

   return (
      <form onSubmit={onSubmit}>
         <p><label htmlFor="email"><input type="text" name="email" id="email" onChange={onChange} /></label></p>
         {error.email && <Error>이메일에 @가 없습니다.</Error>}
         <p><label htmlFor="pw"><input type="password" name="pw" id="pw" onChange={onChange} /></label></p>
         {error.pw && <Error>비밀번호가 비어있습니다.</Error>}
         <p><label htmlFor="pwConfirm"><input type="password" name="pwConfirm" id="pwConfirm" onChange={onChange} /></label></p>
         {error.pwConfirm && <Error>비밀번호가 일치하지 않습니다.</Error>}
         <input type="submit" value="가입하기" />
      </form>
   );
}