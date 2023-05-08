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
      variables: { number: Number(router.query.qqq) }
   })
   console.log('---------')
   console.log(data)
   console.log('---------')

   return (
      <>
         <div>{router.query.qqq}번 게시글로 이동 완료되었습니다.</div>
         <p>작성자 : {data?.fetchBoard.writer}</p>
         <p>제목 : {data?.fetchBoard.title}</p>
         <p>내용 : {data?.fetchBoard.contents}</p>
      </>
   )
}
