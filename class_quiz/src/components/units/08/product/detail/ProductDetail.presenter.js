
export default function ProductDetailUI({ data, onClickMoveToEdit }) {
    return (
        <>
            <h1>상품 상세페이지</h1>

            판매자 :  {data?.fetchProduct.seller}<br />
            상품 이름 :{data?.fetchProduct.name} <br />
            상품 설명 :  {data?.fetchProduct.detail}<br />
            상품 가격 : {data?.fetchProduct.price}<br />
            <button onClick={onClickMoveToEdit}>상품 수정하기</button>
        </>
    );
} ``