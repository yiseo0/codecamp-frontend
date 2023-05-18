import { gql, useQuery } from "@apollo/client";

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

const onCLickAlert = (e: React.MouseEvent<HTMLUListElement>): void => {
  alert(e.currentTarget.id);
}

export default function StaticRoutedBoardPage() : JSX.Element{
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <ul key={el.number} id={el.writer} onClick={onCLickAlert}>
          <li>{el.number}</li>
          <li>{el.writer}</li>
          <li>{el.contents}</li>
        </ul>
      ))}
    </>
  );
}
