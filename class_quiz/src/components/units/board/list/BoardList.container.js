import { useMutation, useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./BoardList.query";
import { useState } from "react";

export default function BoardList() {
   
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = async (productId) => {
    await deleteProduct({
      variables: {
        productId,
      },
      refetchQueries: [
        {
          query: FETCH_PRODUCTS,
        },
      ],
    });
  };

  return <BoardListUI data={data} onClickDelete={onClickDelete} />;
}
