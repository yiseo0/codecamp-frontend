import styled from "@emotion/styled";
import { useState } from "react";

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 25%;
  border-bottom: 1px solid #666;
`;

interface IProps {
   el: any
}
export default function CommentItem(props: IProps): JSX.Element {
   const [isEdit, setIsEdit] = useState(false)

   const onClickEdit = (): void => {
      setIsEdit(prev => !prev)
   }
   return (
      <div>
         {
            !isEdit ? (
               <Row>
                  <Column>
                     <input type="checkbox" name="" id="" />
                  </Column>
                  <Column>{props.el._id}</Column>
                  <Column>{props.el.writer}</Column>
                  <Column>{props.el.contents}</Column>
                  <button onClick={onClickEdit}>수정하기</button>
               </Row>
            ) : (
               <input type="text" />
            )
         }
      </div>
   );
}