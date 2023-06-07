import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from 'react-infinite-scroller';
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

export default function StaticRoutedBoardPage(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = (): void => {
    // fetchMore가 data가 undefined 일 때(데이터를 받아오지 않은 상태)에서도 실행되어 조건문 작성
    if (data === undefined) return

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length ?? 10 / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return { fetchBoards: [...prev.fetchBoards] }
        }
        // variables: { page: 다음 페이지 },
        // updateQuery // fetch 하고 나서 업데이트. prev는 이전 데이터, {fetchMoreResult}는 새롭게 fetch된 데이터 
        // fetchBoards의 이름으로 이전 데이터와 새롭게 refetch된 데이터를 합쳐서 반환
        return { fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards] }
      }
    })
  }
  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      <InfiniteScroll
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <div>{el.contents}</div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
