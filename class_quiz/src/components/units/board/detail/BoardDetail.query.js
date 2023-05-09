import { gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query FetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default FETCH_PRODUCT;
