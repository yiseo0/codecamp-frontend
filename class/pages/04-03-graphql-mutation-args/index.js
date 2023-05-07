import { gql, useMutation } from '@apollo/client'

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
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                // variables은 $와 같아서 안의 변수는 $ 생략
                writer: "송은이",
                title: "제목",
                contents: "내용"
            }
        })
        console.log(result)
        alert(result.data.createBoard.number)
    }

    return (
        <button onClick={onClickSubmit}>Graphql-API(동기) 요청하기</button>
    )
}