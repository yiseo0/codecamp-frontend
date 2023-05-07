/*
   GRAPHQL-API 요청하기

   1) [ GRAPHQL-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 createBoard 라는 API에 mutation을 요청해서 프로필을 등록해 보세요.(작성자, 제목, 내용은 하드코딩합니다.)
   2) 위 1번에서 등록한 데이터를 console.log()로 출력해 보세요.
   3) 위 1번에서 등록한 데이터를 playground에서 fetchBoard 를 요청해서 정말 등록이 되었는지 확인해 보세요.
   4) 위 1번의 과정을 하드코딩 하지 않고,  작성자, 제목, 내용에 대해서 <input /> 태그와 state를 각각 만들고, 직접 입력 받은 작성자, 제목, 내용으로 mutation을 요청해 주세요.
   5) 위 4번에서 등록한 데이터를 console.log()로 출력해 보세요.
   6) 위 4번에서 등록한 데이터를 playground에서 fetchBoard를 요청해서 정말 등록이 되었는지 확인해 보세요.
*/

import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CREATE_BOARD = gql`
   mutation createBoard($writer: String, $title: String, $contents: String) {
      createBoard(
         writer: $writer
         title: $title
         contents: $contents
      ){ _id,  number, message}
   }
`

export default function GraphqlMutationPage() {
   const [data, setData] = useState({
      writer: "",
      title: "",
      contents: ""
   })
   const { writer, title, contents } = data
   const [createBoard] = useMutation(CREATE_BOARD)

   const onClick = async () => {
      const result = await createBoard({
         variables: {
            writer,
            title,
            contents,
         }
      })
      console.log(result.data)
   }

   const onChange = e => {
      const { name, value } = e.target
      setData({
         ...data,
         [name]: value
      })
   }

   return (
      <>
         작성자 <input type="text" name="writer" onChange={onChange} /><br />
         제목 <input type="text" name="title" onChange={onChange} /><br />
         내용 <input type="text" name="contents" onChange={onChange} /><br />
         <button onClick={onClick}>[ GRAPHQL-API 요청하기 ]</button>
      </>
   );
}