/*
   REST-API 요청과 비동기 처리

   1) [ REST-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 [https://koreanjson.com/users](https://koreanjson.com/users) 라는 Endpoint에 get 방식으로 요청하여 데이터를 받아보세요.
   2) 위 1번에서 받은 데이터를 console.log()로 출력해 보세요.
*/

import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
   const [data, setData] = useState([])
   const onClick = async () => {
      const result = await axios.get('https://koreanjson.com/users')
      setData(result.data)
   }

   return (
      <div>
         <button onClick={onClick}>[ REST-API 요청하기 ]</button>
         {console.log(data)}
         {data.map(list => <div>{list.id}번 이름 : {list.name}</div>)}
      </div>
   );
}