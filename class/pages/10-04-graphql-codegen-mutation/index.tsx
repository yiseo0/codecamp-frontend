import { IMutationCreateBoardArgs } from '@/src/commons/types/generated/types'
import { IMutation } from '@/src/commons/types/generated/types'
import { gql, useMutation } from '@apollo/client'

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

export default function GraphqlMutationPage() {
    // const [createBoard] = useMutation<결과타입, 변수타입>(CREATE_BOARD)
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: "송은이",
                    title: "제목",
                    contents: "내용"
                }
            }
        })
        alert(result.data?.createBoard._id)
    }

    return (
        <button onClick={onClickSubmit}>Graphql-API(동기) 요청하기</button>
    )
}