import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
   query fetchBoard($number : Int){
      fetchBoard(number: $number){
         writer, title, contents
      }
   }
`

export default function StaticRoutedBoardPage() {
   const { data } = useQuery(FETCH_BOARD, {
      variables: { number: 2 }
   })
   console.log('---------')
   console.log(data)
   console.log('---------')

   return (
      <>
         <div>2번 게시글로 이동 완료되었습니다.</div>
         <p>작성자 : {data?.fetchBoard.writer}</p>
         <p>제목 : {data?.fetchBoard.title}</p>
         <p>내용 : {data?.fetchBoard.contents}</p>
      </>
   )
}
