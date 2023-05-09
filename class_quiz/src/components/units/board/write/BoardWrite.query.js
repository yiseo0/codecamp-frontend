import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default CREATE_PRODUCT;
