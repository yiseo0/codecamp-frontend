import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";

export default function BoardWrite({ isEdit }) {
  const router = useRouter()
  const [data, setData] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD)

  // 게시물 등록하기
  const onClickSubmit = async () => {
    // console.log(router.query.number) // undefind
    const result = await createBoard({
      variables: {
        // variables은 $와 같아서 안의 변수는 $ 생략
        writer: data.writer,
        title: data.title,
        contents: data.contents,
      },
    });
    alert(result.data.createBoard.message);
    router.push(`/08-05-boards/${result.data.createBoard.number}`)
  };

  // 게시물 수정하기
  const onClickUpdate = async () => {
    // console.log(router.query.number) // number
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: data.writer,
        title: data.title,
        contents: data.contents,
      }
    })
    alert(result.data.updateBoard.message);
    router.push(`/08-05-boards/${result.data.updateBoard.number}`)
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return <BoardWriteUI onChange={onChange} onClickSubmit={onClickSubmit} onClickUpdate={onClickUpdate} isEdit={isEdit} />;
}
