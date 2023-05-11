import { BlueButton, RedInput } from "./BoardWrite.style";

export default function BoardWriteUI({ onChange, onClickSubmit, onClickUpdate, isEdit, boardData }) {
  return (
    <>
      작성자 : <RedInput type="text" name="writer" onChange={onChange} defaultValue={boardData?.fetchBoard.writer } />
      <br />
      제목 : <input type="text" name="title" onChange={onChange} defaultValue={boardData?.fetchBoard.title} />
      <br />
      내용 : <input type="text" name="contents" onChange={onChange} defaultValue={boardData?.fetchBoard.contents} />
      <br />
      <BlueButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  );
}
