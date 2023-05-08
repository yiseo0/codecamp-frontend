import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.query";

export default function BoardWrite() {
  const [data, setData] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // variables은 $와 같아서 안의 변수는 $ 생략
        writer: data.writer,
        title: data.title,
        contents: data.contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return <BoardWriteUI onChange={onChange} onClickSubmit={onClickSubmit} />;
}
