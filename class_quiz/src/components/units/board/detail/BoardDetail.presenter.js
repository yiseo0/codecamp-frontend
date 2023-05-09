export default function BoardDetailUI({data}) {
  return (
    <div>
      <p>작성자 : {data ? data.fetchProduct.price : "Loading..."}</p>
      <p>상품명 : {data ? data.fetchProduct.seller : "Loading..."}</p>
      <p>상품내용 : {data ? data.fetchProduct.detail : "Loading..."}</p>
      <p>상품가격 : {data ? data.fetchProduct.price : "Loading..."}</p>
      {/* 옵셔널 체이닝 */}
      {/* <p>작성자 : {data?.fetchProduct.price}</p>
     <p>상품명 : {data?.fetchProduct.seller}</p>
     <p>상품내용 : {data?.fetchProduct.detail}</p>
     <p>상품가격 : {data?.fetchProduct.price}</p> */}
    </div>
  );
}
