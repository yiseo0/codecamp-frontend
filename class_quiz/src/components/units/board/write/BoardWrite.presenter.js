export default function BoardWriteUI({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <p>
        판매자 : <input type="text" name="seller" onChange={onChange} />
      </p>
      <p>
        상품명 : <input type="text" name="name" onChange={onChange} />
      </p>
      <p>
        상품내용 : <input type="text" name="detail" onChange={onChange} />
      </p>
      <p>
        상품가격 : <input type="text" name="price" onChange={onChange} />
      </p>
      <input type="submit" value="상품등록" />
    </form>
  );
}
