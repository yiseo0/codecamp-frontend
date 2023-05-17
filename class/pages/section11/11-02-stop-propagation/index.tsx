import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import CheckBox from "./CheckBox";

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

const qqq1 = () => {
  alert("1번 클릭");
}


const qqq4 = (e) => {
  e.stopPropagation()
  alert("4번 클릭");
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
        <Row key={el.number} id={el.writer} onClick={qqq1}>
          <CheckBox />
          <Column onClick={qqq4}>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
        </Row>
      ))}
    </>
  );
}
