// /*
// 1. 무한스크롤을 라이브러리를 사용하지 않고, 직접 구현해 보세요.

// 2. 직접 구현시 발생하는 문제가, 한 번 스크롤을 내리면 수없이 많은 쿼리가 요청된다는 것 입니다.
// 해당 문제를 해결하기 위해 쓰로틀링을 적용해 보세요.
// (아직 쓰로틀링을 배우지 않았으므로, 검색을 통해 적용시켜 보세요.)
// */

import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
const Container = styled.div`
  padding: 50px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  padding-bottom: 60px;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;
const ContentsBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

interface IProps {
  children: JSX.Element;
  loadMore: () => void;
  isMount?: boolean;
  isLoading: boolean;
  hasMore: boolean;
}
export function InfiniteScroll({
  children,
  loadMore,
  isMount,
  isLoading,
  hasMore,
}: IProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [loadOnMount, setLoadOnMount] = useState(isMount);

  const onScroll = () => {
    if (
      !isLoading &&
      hasMore &&
      scrollRef.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setLoadOnMount(true);
    }
  };  

  useEffect(() => {
    if (!isLoading && hasMore && loadOnMount) {
      loadMore();
      setLoadOnMount(false);
    }

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [isLoading, hasMore, loadOnMount]);

  return <div ref={scrollRef}>{children}</div>;
}
export default function Quiz03_05() {
  const PAGE_COUNT = 10;
  const [numbers, setNumbers] = useState<number[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const onLoadMore = () => {
    setPage((page) => page + 1);
    setLoading(true);
    setTimeout(() => {
      const data = Array(PAGE_COUNT)
        .fill(1)
        .map((_, i) => page * PAGE_COUNT + i);
      setNumbers([...numbers, ...data]);
      setLoading(false);
    }, 400);
  };

  return (
    <>
      <InfiniteScroll
        isMount={true}
        loadMore={onLoadMore}
        isLoading={isLoading}
        hasMore={numbers.length <= 50}
      >
        <Container>
          <Wrapper>
            <Title>InFinite Scroll</Title>
            {numbers.map((num) => (
              <ContentsWrapper key={num}>
                <ContentsBox>
                  <Contents>{num}</Contents>
                </ContentsBox>
              </ContentsWrapper>
            ))}
          </Wrapper>
        </Container>
      </InfiniteScroll>
    </>
  );
}
