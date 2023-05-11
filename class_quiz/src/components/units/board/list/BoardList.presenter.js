import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;
const Column = styled.div`
  width: 25%;
`;

export default function BoardListUI({ data, onClickDelete }) {
  return (
    <>
      <h1>상품 목록</h1>
      {data?.fetchProducts.map((list) => (
        <Row key={list._id}>
          <Column>
            <input type="checkbox" name="" id="" />
          </Column>
          <Column>{list.name}</Column>
          <Column>{list.price}</Column>
          <Column>{list.seller}</Column>
          <Column>
            <button onClick={() => onClickDelete(list._id)}>삭제</button>
          </Column>
        </Row>
      ))}
    </>
  );
}
