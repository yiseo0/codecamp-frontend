import { IProductWriteUI } from "./ProductWrite.types";

export default function ProductWriteUI(props: IProductWriteUI) {
    return (
        <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>

            {props.isEdit || <> 판매자 :  <input type="text" name="seller" onChange={props.onChange} /><br /></>}
            상품 이름 : <input type="text" name="name" defaultValue={props.userData?.fetchProduct.name} onChange={props.onChange} /><br />
            상품 설명 :  <input type="text" name="detail" defaultValue={props.userData?.fetchProduct.detail} onChange={props.onChange} /><br />
            상품 가격 : <input type="text" name="price" defaultValue={props.userData?.fetchProduct.price} onChange={props.onChange} /><br />
            <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>상품 {props.isEdit ? "수정" : "등록"}</button>
        </>
    );
}