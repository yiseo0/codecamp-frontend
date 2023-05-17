import { IQuery, IQueryFetchBoardArgs } from "@/src/commons/types/generated/types"
import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
   query fetchBoard($boardId : Int){
      fetchBoard(boardId: $boardId){
         writer, title, contents
      }
   }
`

export default function StaticRoutedBoardPage() {
   const router = useRouter()
   const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
      variables: { boardId: "1" }
   })
   console.log('---------')
   console.log(data?.fetchBoard._id)
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
