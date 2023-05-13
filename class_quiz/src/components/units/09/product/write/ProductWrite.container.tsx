import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.query";
import { IData, IProductWriteProps, IUpdateProductInput } from "./ProductWrite.types";

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const [create_product] = useMutation(CREATE_PRODUCT);
  const [update_product] = useMutation(UPDATE_PRODUCT);
  const [data, setData] = useState<IData>({
    seller: "",
    name: "",
    detail: "",
    price: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // 게시물 등록 함수
  const onClickSubmit = async () => {
    try {
      const result = await create_product({
        variables: {
          seller: data.seller,
          createProductInput: {
            name: data.name,
            detail: data.detail,
            price: Number(data.price),
          },
        },
      });
      alert(result.data.createProduct.message);
      router.push(`/09/products/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 게시물 수정 함수
  const onClickUpdate = async () => {
    const updateProductInput: IUpdateProductInput = {};
    if (data.name) updateProductInput.name = data.name;
    if (data.detail) updateProductInput.detail = data.detail;
    if (data.price) updateProductInput.price = Number(data.price);
    try {
      const result = await update_product({
        variables: {
          productId: router.query.id,
          updateProductInput,
        },
      });
      alert(result.data.updateProduct.message);
      router.push(`/09/products/${router.query.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      data={data}
      userData={props.userData}
      onChange={onChange}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
