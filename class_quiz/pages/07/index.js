/* 
    모두 체크 구현

    요약
    체크하면 상태에 체크한 배열요소 저장
    모두체크는 기존 배열요소와 체크한 배열요소의 length를 비교

    모두체크
    함수 : 
    기본 데이터의 length와 상태 length가 일치하면 상태 비우기, 일치하지 않으면 상태에 전체배열요소 저장
    checked속성 : 
    기본 데이터의 length와 상태 length가 일치하면 true, 일치하지 않으면 false
    
    기본 체크 
    함수 : 
    상태 안에 배열요소 id가 존재하면 배열요소 id 비우기, 존재하지 않으면 상태에 배열요소 추가
    checked 속성 : 상태안에 배열요소 id가 존재하면 true, 존재하지 않으면 false
*/
import { useState } from "react";

export default function Quiz02() {

    const dataList = [
        { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
        { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
        { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
        { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
        { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
        { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
    ];

    return (
        <table>
            <tr>
                <th>
                    <input
                        type="checkbox"
                    ></input>
                </th>
                <th>번호</th>
                <th>제목</th>
                <th>작성일</th>
            </tr>
            {dataList.map((list, index) => (
                <tr key={index}>
                    <td>
                        <input
                            type="checkbox"
                        />
                    </td>
                    <td>{list.id}</td>
                    <td>{list.data}</td>
                    <td>{list.date}</td>
                </tr>
            ))}
        </table>
    );
}