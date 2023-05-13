import ProductWrite from "@/src/components/units/09/product/write/ProductWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query FetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      name
      detail
      price
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    }
  });

  console.log(data)
  return <ProductWrite isEdit={true} userData={data} />;
}
