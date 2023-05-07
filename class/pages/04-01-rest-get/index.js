import axios from "axios";
import { useState } from "react";

// 동기통신과 비동기통신
export default function RestGetPage() {
   const [title, setTitle] = useState('')
   const onClickAsync = () => {
      const result = axios.get("https://koreanjson.com/posts/1")
      console.log(result) // promise{<pending>} - promise 대기 상태
   }

   // 화살표 함수 async/await
   const onClickSync = async () => {
      const result = await axios.get("https://koreanjson.com/posts/1")
      console.log(result) // {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
      console.log(result.data)
      setTitle(result.data.title)
   }

   // 일반 함수 async/await
   // async function onClickSync() {
   //    const result = await axios.get("https://koreanjson.com/posts/1")
   //    console.log(result)
   // }
   return (
      <>
         {/* 비동기통신 */}
         <button onClick={onClickAsync}>REST-API(비동기)요청하기</button>
         {/* 동기통신 */}
         <button onClick={onClickSync}>REST-API(동기) 요청하기</button>

         제목 : {title}
      </>
   );
}