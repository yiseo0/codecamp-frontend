import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

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

export default function StaticRoutedBoardPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number(e.currentTarget.innerText) }); // variables 키워드를 명시하지 않아도 된다.
  };

  const onClickPrev = () => {};
    refetch({ page: 1 });
  const onClickNext = () => {
    refetch({page : 21})
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
          <span onClick={onClickPage}>{idx + 1}</span>
        ))}
      <span onClick={onClickNext}>다음</span>
    </>
  );
}
