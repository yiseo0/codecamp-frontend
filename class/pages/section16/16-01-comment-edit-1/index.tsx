import { useState } from "react";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query {
    fetchBoards{
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const [myIndex, setMyIndex] = useState(-1)

  console.log(data)

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(e.currentTarget.id))
  }


  return (
    <>
      {data?.fetchBoards.map((el, idx) =>
        idx !== myIndex ? (
          <Row key={el._id}>
            <Column>
              <input type="checkbox" name="" id="" />
            </Column>
            <Column>{el._id}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.contents}</Column>
            <button id={String(idx)} onClick={onClickEdit}>수정하기</button>
          </Row>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </>
  );
}
