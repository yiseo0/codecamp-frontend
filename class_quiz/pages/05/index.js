/*
다이나믹 라우팅 & 데이터 조회

폴더: `/class_quiz/pages/05/boards/` 안에 등록 화면과 다이나믹 라우팅을 이용한 상품 상세 화면을 구현해주세요. (수업 내용 참고)

1) 판매자, 상품명, 상품내용, 상품가격을 입력할 수 있는 상품 등록 화면을 만들어 주세요.
2) 상품 등록 버튼을 누르면 createProduct를 활용하여 상품등록 mutation을 요청해 주세요.
3) mutation이 실패할 수도 있기 때문에, try ~ catch로 감싸 주세요.**(이를** **예외처리라고 합니다.)**
4) 상세보기 화면으로 동적 라우팅하여 이동해 주세요**(응답으로 받은 상품ID 활용)**
5) 동적라우팅된 화면에서 주소에 있는 상품ID를 가져오고**(router.query 활용)**, 가져온 상품ID로 fetchProduct를 활용하여 상품 정보를 조회해 주세요.
6) 조회한 상품 정보를 화면에 보여주세요.
7) 비동기 방식으로 컴포넌트가 렌더링되기 때문에, 아직 받아오지 못한 상품 data가 없어서 에러가 발생하나요? 그렇다면, 조건부 렌더링의 **&& 연산자**를 사용해 보세요.
8) 위 7번의 &&연산자를 **옵셔널 체이닝**을 사용해서 변경해 보세요.
9) data가 없을 때, 초기 상태를 loading... 으로 표기해 주세요.(**삼항 연산자**를 사용하면 되겠죠?)
*/

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
   mutation CreateProduct($seller: String, $createProductInput: CreateProductInput!) {
   createProduct(seller: $seller, createProductInput: $createProductInput) {
     _id
     number
     message
   }
 }
`

export default function BoardPage() {
   const router = useRouter()
   const [data, setData] = useState({
      seller: "",
      name: "",
      detail: "",
      price: ""
   })
   const { seller, name, detail, price } = data

   const [create_product] = useMutation(CREATE_PRODUCT)

   const onChange = e => {
      const { name, value } = e.target
      setData({
         ...data,
         [name]: value
      })
   }

   const onSubmit = async e => {
      e.preventDefault()
      try {
         const result = await create_product({
            variables: {
               seller,
               "createProductInput": {
                  name,
                  detail,
                  "price": Number(price)
               }
            }
         })
         alert(result.data.createProduct.message)
         router.push(`/05/${result.data.createProduct._id}`)
      } catch (error) {
         alert(error.message)
      }
   }

   return (
      <form onSubmit={onSubmit}>
         <p>판매자 : <input type="text" name="seller" onChange={onChange} /></p>
         <p>상품명 : <input type="text" name="name" onChange={onChange} /></p>
         <p>상품내용 : <input type="text" name="detail" onChange={onChange} /></p>
         <p>상품가격 : <input type="text" name="price" onChange={onChange} /></p>
         <input type="submit" value="상품등록" />
      </form>
   );
}