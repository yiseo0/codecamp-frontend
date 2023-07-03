/*
  2. 고난도) 무한스크롤 직접 만들기
  1) 무한스크롤을 라이브러리를 사용하지 않고, 직접 구현해 보세요.
  2) 직접 구현시 발생하는 문제가, 한 번 스크롤을 내리면 수없이 많은 쿼리가 요청된다는 것 입니다.
    해당 문제를 해결하기 위해 쓰로틀링을 적용해 보세요.
    (아직 쓰로틀링을 배우지 않았으므로, 검색을 통해 적용시켜 보세요.)
*/

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

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
  const box = useRef<HTMLDivElement>(null);
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  const onScroll = () => {
    if (throttleTimeout.current) return;
    throttleTimeout.current = setTimeout(() => {
      if (
        box &&
        box.current &&
        box.current.clientHeight >=
          box.current.scrollHeight - box.current.scrollTop - 10
      ) {
        void fetchMore({
          variables: { page: (data?.fetchBoards.length ?? 10) / 10 + 1 },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (fetchMoreResult === undefined) {
              return { fetchBoards: [...prev.fetchBoards] };
            } else {
              return {
                fetchBoards: [
                  ...prev.fetchBoards,
                  ...fetchMoreResult.fetchBoards,
                ],
              };
            }
          },
        });
      }
      console.log(1);
      throttleTimeout.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (throttleTimeout.current) clearInterval(throttleTimeout.current);
    };
  }, []);

  return (
    <>
      <div
        ref={box}
        className="box"
        style={{ height: 100, overflowY: "scroll" }}
        onScroll={onScroll}
      >
        <ul>
          {data?.fetchBoards.map((item: any, idx: number) => (
            <li key={idx}>
              <span>{item.title}</span>
              <span>{item.writer}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
