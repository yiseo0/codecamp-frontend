import { gql, useQuery } from "@apollo/client";
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

const onCLickAlert = (e :  React.MouseEvent<HTMLDivElement>) => {
    alert(e.currentTarget.id);
}

const qqq = () => {
  alert("클릭 타이틀");
}

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
  border-bottom: 1px solid #666;
`;

export default function StaticRoutedBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number} id={el.writer} onClick={onCLickAlert}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
    </>
  );
}
