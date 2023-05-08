export default function BoardWriteUI({ onChange, onClickSubmit }) {
  return (
    <>
      작성자 : <input type="text" name="writer" onChange={onChange} />
      <br />
      제목 : <input type="text" name="title" onChange={onChange} />
      <br />
      내용 : <input type="text" name="contents" onChange={onChange} />
      <br />
      <button onClick={onClickSubmit}>Graphql-API(동기) 요청하기</button>
    </>
  );
}
