import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
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
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (number) => {
    await deleteBoard({
      variables: {
        number: Number(number),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" name="" id="" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <Column>
            <button onClick={() => onClickDelete(el.number)}>삭제</button>
          </Column>
        </Row>
      ))}
    </>
  );
}
