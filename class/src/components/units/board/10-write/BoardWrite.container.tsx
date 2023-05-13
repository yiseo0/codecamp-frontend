import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";



export default function BoardWrite(props: IBoardWriteProps) {
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
    router.push(`/10-02-typescript-board/${result.data.createBoard.number}`)
  };

  // 게시물 수정하기
  const onClickUpdate = async () => {

    const myVariables: IMyVariables = {
      number: Number(router.query.number) // 무조건 존재하는 속성
    }
    if (data.writer) myVariables.writer = data.writer
    if (data.title) myVariables.writer = data.title
    if (data.contents) myVariables.writer = data.contents
    // data.writer가 존재하면 myVariables 객체에 writer속성 및 값 추가

    // console.log(router.query.number) // number
    const result = await updateBoard({
      variables: myVariables
    })


    alert(result.data.updateBoard.message);
    router.push(`/10-02-typescript-board/${result.data.updateBoard.number}`)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return <BoardWriteUI onChange={onChange} onClickSubmit={onClickSubmit} onClickUpdate={onClickUpdate} isEdit={props.isEdit} boardData={props.boardData} />;
}
