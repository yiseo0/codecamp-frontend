import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      title
      createdAt
    }
  }
`;

export default function BoardListPage() {
  const [checked, setChecked] = useState([]);
  const { data } = useQuery(FETCH_BOARDS);

  const onCheckAll = () => {
    if (data.length === checked.length) {
      setChecked([]);
    } else {
      setChecked(data.fetchBoards);
    }
  };

  const onCheckItem = (list) => {
    if (checked.find((el) => el.id === list.id)) {
      setChecked(checked.filter((el) => el.id !== list.id));
    } else {
      setChecked(...checked, list);
    }
  };

  const onChecked = list => {
    return checked.find((el) => el.id === list.id)
  }

  // const dataList = [
  //   { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
  //   { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
  //   { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
  //   { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
  //   { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
  //   { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
  // ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name=""
                id=""
                onChange={onCheckAll}
                checked={data?.length === checked.length}
              />
            </th>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data?.fetchBoards.map((list) => (
            <tr key={list.number}>
              <th>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => onCheckItem(list)}
                  checked={onChecked(list)}
                />
              </th>
              <th>{list.number}</th>
              <th>{list.title}</th>
              <th>{list.createdAt}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button>전체 삭제</button>
    </>
  );
}
