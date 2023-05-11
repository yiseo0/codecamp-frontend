import { BlueButton, RedInput } from "./BoardWrite.style";

export default function BoardWriteUI({ onChange, onClickSubmit, onClickUpdate, isEdit }) {
  return (
    <>
      작성자 : <RedInput type="text" name="writer" onChange={onChange} />
      <br />
      제목 : <input type="text" name="title" onChange={onChange} />
      <br />
      내용 : <input type="text" name="contents" onChange={onChange} />
      <br />
      <BlueButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  );
}
