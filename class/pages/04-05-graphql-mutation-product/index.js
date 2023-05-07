import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

// 보통 대문자로 작성함, 쿼리문
const CREATE_PRODUCT = gql`
    mutation createProduct($seller : String, $createProductInput: CreateProductInput!) { # 변수 타입 지정
        createProduct( 
            # 실제 전달할 변수
            seller: $seller
            createProductInput: $createProductInput
        ){
            _id,number,message
        }
    }
`

export default function GraphqlMutaionPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                // variables은 $와 같아서 안의 변수는 $ 생략
                seller: "송은이",
                createProductInput: {
                    name: "마우스",
                    detail: "광 마우스",
                    price: 5000
                }
            }
        })
        console.log(result)
    }

    return (
        <>
            <button onClick={onClickSubmit}>Graphql-API(동기) 요청하기</button>
        </>
    )
}