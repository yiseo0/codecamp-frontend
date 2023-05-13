import { BlueButton, RedInput } from "./BoardWrite.style";
import { IBoardWriteUIProps } from "./BoardWrite.types";



export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      작성자 : <RedInput type="text" name="writer" onChange={props.onChange} defaultValue={props.boardData?.fetchBoard.writer} />
      <br />
      제목 : <input type="text" name="title" onChange={props.onChange} defaultValue={props.boardData?.fetchBoard.title} />
      <br />
      내용 : <input type="text" name="contents" onChange={props.onChange} defaultValue={props.boardData?.fetchBoard.contents} />
      <br />
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  );
}
