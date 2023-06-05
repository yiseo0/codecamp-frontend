/*
   1. 페이지네이션 구현하기

   1) Playground를 참고하여, 게시글 목록(fetchBoards) API를 요청해 주세요.
   2) 위에서 요청한 게시글 목록 데이터를 화면에 간단한 표 형태로 출력해 주세요.
      ⇒ 힌트) map을 활용해 보세요.
   3) 표 하단에 page를 10개 나열해 보세요.
      ⇒ 힌트) 10개의 임의 배열을 만든 후, map을 활용해 보세요.
   4) 해당 page를 클릭하면, page에 맞는 데이터를 불러오도록 만들어 보세요.
   5) 현재 클릭된 page의 버튼 색을 변경해 보세요.
   6) 페이지 번호에 이전("<") 버튼과 다음(">") 버튼을 만들고, 이전을 클릭하면 10개 이전 페이지로, 다음을 클릭하면 10개 이후의 페이지로 이동해 보세요. 
      물론, 페이지 이동시 해당 페이지에 맞는 데이터를 불러와야 합니다.
   7) 페이지 10개 중, 마지막 페이지가 77 페이지라면, 나머지 78 79 80 페이지는 화면에 보이지 않도록 만들어 주세요.
   8) 이전("<") 버튼과 다음(">") 버튼을 클릭했을 때 더이상 이동할 수 있는 페이지가 없다면 무시하도록 만들어 주세요. 추가로, 버튼에 비활성화 표시를 적용해 주세요.
      힌트) Emotion에 props로 isActive를 전달합니다.
*/

import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";

interface IPagerProps {
   selected: boolean
}

const FETCH_BOARDS = gql`
   query fetchBoards($page : Int) {
      fetchBoards(page : $page){
         _id,
         writer,
         title,
         createdAt
      }
   }
`

const FETCH_BOARDS_COUNT = gql`
   query {
      fetchBoardsCount
   }
`

const Pager = styled.div``
const PagerButton = styled.button``
const PagerItem = styled.span`
   margin: 0 5px;
   cursor: pointer;
   color : ${(props: IPagerProps) => props.selected ? 'red' : 'black'};
`

function index() {
   const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
   const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

   const [selectPage, setSelectPage] = useState(1)
   const [startPage, setStartPage] = useState(1)
   const lastPage = Math.ceil(((dataBoardsCount?.fetchBoardsCount || 10) / 10))

   const onClickPage = (e: MouseEvent<HTMLLIElement>): void => {
      setSelectPage(Number(e.currentTarget.innerText))
      refetch({ page: Number(e.currentTarget.innerText) })
   }

   const onClickPagePrev = () => {
      if (startPage === 1) {
         return
      }
      setStartPage(prev => prev - 10)

      refetch({ page: startPage - 10 })
      setSelectPage(startPage - 10)
   }

   const onClickPageNext = () => {
      if (startPage + 10 > lastPage) {
         return
      }
      setStartPage(prev => prev + 10)

      refetch({ page: startPage + 10 })
      setSelectPage(startPage + 10)
   }

   return (
      <>
         <table>
            <thead>
               <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일자</th>
               </tr>
            </thead>
            <tbody>
               {
                  data?.fetchBoards.map(el => (
                     <tr key={el._id}>
                        <td>{el.title}</td>
                        <td>{el.writer}</td>
                        <td>{el.createdAt}</td>
                     </tr>
                  ))
               }
            </tbody>
         </table>

         <Pager>
            {
               <PagerButton onClick={onClickPagePrev} disabled={startPage === 1}>이전</PagerButton>
            }

            {
               Array(10).fill(0).map((_, idx) => (
                  (idx + startPage) <= lastPage &&
                  <PagerItem
                     key={idx + startPage}
                     onClick={onClickPage}
                     selected={(idx + startPage) == selectPage}>
                     {idx + startPage}
                  </PagerItem>
               ))
            }
            <PagerButton onClick={onClickPageNext} disabled={startPage + 10 > lastPage}>다음</PagerButton>
         </Pager>
      </>
   );
}

export default index;