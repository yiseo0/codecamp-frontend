/*
  1. 무한스크롤 구현하기
  1) Playground를 참고하여, 게시글 목록(fetchBoards) API를 요청해 주세요.
  2) 위에서 요청한 게시글 목록 데이터를 화면에 간단한 표 형태로 출력해 주세요.
    ⇒ 힌트) map을 활용해 보세요.
  3) 스크롤을 내리면 추가 데이터를 받아와서 기존 데이터와 연결시켜 보세요
  4) 높이를 500px로 고정시키고, 해당 높이에서 생성되는 스크롤에 따라서 추가 데이터가 받아지도록 변경해 보세요(윈도우 스크롤을 사용하지 않습니다.)
*/

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
    }
  }
`;

export default function index() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ height: 500, overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <ul>
          {data?.fetchBoards.map((item: any, idx: number) => (
            <li key={item._id}>
              <span>{item.title}</span>
              <span>{item.writer}</span>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
