import styled from '@emotion/styled';
import { useState } from 'react'

const Modal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
`
const Dimmed = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0,0,0,0.5);
`
const Content = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: #fff;
   width: 200px;
   height: 100px;
   text-align: center;
   padding: 20px;
`

export default function ModalPage() {
   const [modal, setModal] = useState(false)

   const onClickModal = () => {
      setModal(prev => !prev)
   }

   return (
      <>
         <button onClick={onClickModal}>모달열기</button>
         {
            modal &&
            <Modal>
               <Dimmed onClick={onClickModal} />
               <Content>
                  내용입니다.
               </Content>
            </Modal>
         }
      </>
   );
}