
export default function ProductWriteUI(props) {
    return (
        <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>

            {props.isEdit || <> 판매자 :  <input type="text" name="seller" value={props.data.seller} onChange={props.onChange} /><br /></>}
            상품 이름 : <input type="text" name="name" value={props.data.name} onChange={props.onChange} /><br />
            상품 설명 :  <input type="text" name="detail" value={props.data.detail} onChange={props.onChange} /><br />
            상품 가격 : <input type="text" name="price" value={props.data.price} onChange={props.onChange} /><br />
            <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>상품 {props.isEdit ? "수정" : "등록"}</button>
        </>
    );
}