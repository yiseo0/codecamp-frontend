import { gql, useMutation } from '@apollo/client'

// 보통 대문자로 작성함
const CREATE_BOARD = gql`
    mutation {
        createBoard(
            writer: 123
            title: "제목"
            contents: "내용"
        ){
            _id,number,message
        }
    }
`

export default function GraphqlMutaionPage() {
    const [나의함수] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
        alert(result.data.createBoard.number)
    }

    return (
        <button onClick={onClickSubmit}>Graphql-API(동기) 요청하기</button>
    )
}