/*
   5. 고난도) 잇츠로드
   1) 아이콘 등 모든 그림은 피그마과 동일하게 만들어 주세요.
   2) state, setState, useState를 사용하여 이메일과 비밀번호가 빈칸인지 검증하고, 빈칸이라면 그림과 같은 메시지를 나타나게 만들어 주세요.
   3) 이메일은 @가 포함되어있는지, 비밀번호는 8자리가 넘는지 확인해 주세요
   4) 맨 윗줄의 와이파이, 배터리 등은 만들지 않습니다.
*/

import { Bar, CenterBox, Image, Input, InputBox, InputBoxPassword, InputClearBtn, KakaoLoginBtn, LookBox, Message, SubmitBtn, Title, Wrapper } from "@/styles/02-5/itsRoad";
import { useState } from "react";

export default function ItsRoad() {
   const [data, setData] = useState({
      email: '',
      pw: ''
   })

   const [emailMsg, setEmailMsg] = useState(false)
   const [pwMsg, setPwMsg] = useState(false)

   const onChange = e => {
      const { name, value } = e.target
      setData({
         ...data,
         [name]: value
      })
   }

   const onSubmit = e => {
      e.preventDefault()
      setEmailMsg(false)
      setPwMsg(false)
      if (!data.email.includes('@')) {
         setEmailMsg(true)
      }
      if (!(/^[a-z0-9]{8,16}$/.test(data.pw))) {
         setPwMsg(true)
      }
   }

   return (
      <Wrapper>
         <CenterBox>
            <Image>
               <img src="/02-5/pin.png" alt="" />
               <Bar />
            </Image>
            <Title>잇츠로드</Title>
         </CenterBox>

         <form onSubmit={onSubmit}>
            <InputBox>
               <Input type="text" name="email" value={data.email} onChange={onChange} />
               <InputClearBtn>
                  <img src="/02-5/icon_close.png" alt="" />
               </InputClearBtn>
            </InputBox>
            {emailMsg && <Message >이메일 주소를 다시 확인해주세요.</Message>}
            <InputBoxPassword>
               <Input type="password" name="pw" value={data.pw} onChange={onChange} />
               <InputClearBtn>
                  <img src="/02-5/icon_close.png" alt="" />
               </InputClearBtn>
            </InputBoxPassword>
            {pwMsg && <Message >8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.</Message>}
            <SubmitBtn type="submit" value="로그인" />
         </form>
         <LookBox>
            <li>이메일 찾기</li>
            <li>비밀번호 찾기</li>
            <li>회원가입</li>
         </LookBox>
         <KakaoLoginBtn type="button">
            <img src="/02-5/talk.png" alt="" />
            카카오톡으로 로그인
         </KakaoLoginBtn>
      </Wrapper>
   );
}