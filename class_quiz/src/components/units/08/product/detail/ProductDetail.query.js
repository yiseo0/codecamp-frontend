import { gql } from "@apollo/client"

const FETCH_PRODUCT = gql`
query fetchProduct($productId : ID){
    fetchProduct(
        productId: $productId
    ){
        _id
        seller
        name
        detail
        price
        createdAt
    }
}
`