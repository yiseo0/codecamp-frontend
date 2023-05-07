import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

// 보통 대문자로 작성함
const CREATE_BOARD = gql`
    mutation createBoard($writer : String, $title: String, $contents : String ) { # 변수 타입 지정
        createBoard( 
            # 실제 전달할 변수
            writer: $writer
            title: $title
            contents: $contents
        ){
            _id,number,message
        }
    }
`

export default function GraphqlMutaionPage() {
    const [data, setData] = useState({
        writer: '',
        title: '',
        contents: '',
    })
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                // variables은 $와 같아서 안의 변수는 $ 생략
                writer: data.writer,
                title: data.title,
                contents: data.contents
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
    }

    const onChange = e => {
        const { name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <>
            작성자 : <input type="text" name="writer" onChange={onChange} /><br />
            제목 : <input type="text" name="title" onChange={onChange} /><br />
            내용 : <input type="text" name="contents" onChange={onChange} /><br />
            <button onClick={onClickSubmit}>Graphql-API(동기) 요청하기</button>
        </>
    )
}