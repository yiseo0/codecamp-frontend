import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import CREATE_PRODUCT from "./BoardWrite.query";

export default function BoardWrite() {
  const router = useRouter();
  const [data, setData] = useState({
    seller: "",
    name: "",
    detail: "",
    price: "",
  });
  const { seller, name, detail, price } = data;

  const [create_product] = useMutation(CREATE_PRODUCT);

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await create_product({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      alert(result.data.createProduct.message);
      router.push(`/06/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return <BoardWriteUI onSubmit={onSubmit} onChange={onChange} />;
}
