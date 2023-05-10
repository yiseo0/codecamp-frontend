import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.query";

export default function ProductWrite(props) {
    const router = useRouter()
    const [create_product] = useMutation(CREATE_PRODUCT)
    const [update_product] = useMutation(UPDATE_PRODUCT)
    const [data, setData] = useState({
        seller: "",
        name: "",
        detail: "",
        price: "",
    })

    const onChange = e => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

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
                    }
                }
            })
            alert(result.data.createProduct.message)
            router.push(`/08/products/${result.data.createProduct._id}`)
        } catch (error) {
            console.log(error)
        }
    }

    // 게시물 수정 함수
    const onClickUpdate = async () => {
        try {
            const result = await update_product({
                variables: {
                    productId: router.query.id,
                    updateProductInput: {
                        name: data.name,
                        detail: data.detail,
                        price: Number(data.price),
                    }
                }
            })
            alert(result.data.updateProduct.message)
            router.push(`/08/products/${router.query.id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductWriteUI isEdit={props.isEdit} data={data} onChange={onChange} onClickSubmit={onClickSubmit} onClickUpdate={onClickUpdate} />

    );
}