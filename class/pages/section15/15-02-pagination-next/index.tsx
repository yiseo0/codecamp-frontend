import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
  border-bottom: 1px solid #666;
`;

export default function StaticRoutedBoardPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1)

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.innerText) }); // variables 키워드를 명시하지 않아도 된다.
  };

  const onClickPrev = (): void => {
    setStartPage(startPage - 10)
    void refetch({ page: startPage - 10 });
  };

  const onClickNext = (): void => {
    setStartPage(startPage + 10)
    void refetch({ page: startPage + 10 })
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" name="" id="" />
          </Column>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}

      <span onClick={onClickPrev}>이전</span>

      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <span key={idx + startPage} onClick={onClickPage}>{idx + startPage}</span>
        ))}
      <span onClick={onClickNext}>다음</span>
    </>
  );
}
