import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
   query fetchBoard($number : Int){
      fetchBoard(number: $number){
         writer, title, contents
      }
   }
`

export default function StaticRoutedBoardPage() {
   const router = useRouter()
   const { data } = useQuery(FETCH_BOARD, {
      variables: { number: Number(router.query.number) }
   })
   console.log('---------')
   console.log(data)
   console.log('---------')

   const onClickMoveToEdit = () => {
      router.push(`/09-01-boards/${router.query.number}/edit`)
   }

   return (
      <>
         <div>{router.query.number}번 게시글로 이동 완료되었습니다.</div>
         <p>작성자 : {data?.fetchBoard.writer}</p>
         <p>제목 : {data?.fetchBoard.title}</p>
         <p>내용 : {data?.fetchBoard.contents}</p>
         <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
      </>
   )
}
