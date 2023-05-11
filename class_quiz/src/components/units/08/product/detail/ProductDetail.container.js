import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FETCH_PRODUCT from "../../../board/detail/BoardDetail.query";
import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetail() {
    const router = useRouter()
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.id
        }
    })
    const onClickMoveToEdit = () => {
        router.push(`/08/products/${router.query.id}/edit`)
    }

    return (
        <ProductDetailUI data={data} onClickMoveToEdit={onClickMoveToEdit} />
    );
}