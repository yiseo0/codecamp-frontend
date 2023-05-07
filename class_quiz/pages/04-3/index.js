/*
   GRAPHQL-API 요청하기
   
   7) 위 5~6번에 대한 과정을 createProduct에 대해서 동일하게 진행해 보세요.
*/

import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
   mutation createProduct($seller: String, $name : String, $detail : String, $price : Int) {
      createProduct(
         seller: $seller
         createProductInput: {
            name: $name
            detail: $detail
            price: $price
         }
      ){ _id, number, message}
   }
`

export default function GraphqlMutationPage2() {
   const [data, setData] = useState({
      seller: "",
      name: "",
      detail: "",
      price: ""
   })

   const { seller, name, detail, price } = data

   const [createProduct] = useMutation(CREATE_PRODUCT)


   const onClick = async () => {
      const result = await createProduct({
         variables: {
            seller,
            name,
            detail,
            price,
         }
      })
      console.log(result)
   }

   const onChange = e => {
      const { name, value } = e.target

      // price의 값은 숫자로 변환
      if (name === "price") value = Number(value)

      setData({
         ...data,
         [name]: value
      })
   }

   return (
      <>
         <p>파는 사람<input type="text" name="seller" onChange={onChange} /></p>
         <p>상품 이름<input type="text" name="name" onChange={onChange} /></p>
         <p>상품 설명<input type="text" name="detail" onChange={onChange} /></p>
         <p>가격<input type="text" name="price" onChange={onChange} /></p>
         <button onClick={onClick}>[ GRAPHQL-API 요청하기 ]</button>
      </>
   );
}