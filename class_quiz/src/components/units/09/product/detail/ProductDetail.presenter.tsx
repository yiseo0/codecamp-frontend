import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
    return (
        <>
            <h1>상품 상세페이지</h1>

            판매자 :  {props.data?.fetchProduct.seller}<br />
            상품 이름 :{props.data?.fetchProduct.name} <br />
            상품 설명 :  {props.data?.fetchProduct.detail}<br />
            상품 가격 : {props.data?.fetchProduct.price}<br />
            <button onClick={props.onClickMoveToEdit}>상품 수정하기</button>
        </>
    );
} ``