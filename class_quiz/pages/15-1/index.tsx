import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "@/src/commons/types/generated/types";
import { DocumentNode, gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

const PagerWrap = styled.div`
  list-style: none;
  display: flex;
  gap: 20px;
  button {
    &.active {
      color: red;
    }
  }
`;

interface IPagerProps {
  view?: number;
  maxCount: number | undefined;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

export function Pager(props: IPagerProps) {
  const { active, setActive } = props;
  const [stateCurrent, setCurrent] = useState<number>(1);
  const count = Math.ceil((props.maxCount || 10) / 10);
  const view = props.view || 10;

  const onClickPrev = () => {
    if (stateCurrent === 1) return;
    setCurrent((stateCurrent) => stateCurrent - view);
    setActive(stateCurrent - view);
  };

  const onClickNext = () => {
    if (stateCurrent + view > count) return;
    setCurrent((stateCurrent) => stateCurrent + view);
    setActive(stateCurrent + view);
  };

  return (
    <PagerWrap>
      <button
        className="prev"
        onClick={onClickPrev}
        disabled={stateCurrent === 1 && true}
      >
        prev
      </button>
      {Array(view)
        .fill(0)
        .filter((item: any, idx: number) => idx + stateCurrent <= count)
        .map((item: any, idx: number) => (
          <button
            key={idx}
            className={active === idx + stateCurrent ? "active" : ""}
            onClick={() => setActive(idx + stateCurrent)}
          >
            {idx + stateCurrent}
          </button>
        ))}
      <button
        className="next"
        onClick={onClickNext}
        disabled={stateCurrent + view > count && true}
      >
        next
      </button>
    </PagerWrap>
  );
}
export default function index() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: count } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const [stateActive, setActive] = useState<number>(1);

  useEffect(() => {
    refetch({ page: stateActive });
  }, [stateActive]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
          </tr>
        </thead>
        <tbody>
          {data?.fetchBoards.map((item: any, idx: number) => (
            <tr key={item._id}>
              <td>{idx + 1}</td>
              <td>{item.title}</td>
              <td>{item.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pager
        view={5}
        active={stateActive}
        setActive={setActive}
        maxCount={count?.fetchBoardsCount}
      />
    </>
  );
}
