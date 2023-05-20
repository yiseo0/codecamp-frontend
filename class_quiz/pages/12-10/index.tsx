import styled from "@emotion/styled";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px;
`;
const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: gray;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
    color: #000;
  }
`;
const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  position: absolute;
  z-index: 1;
`;
const Modal = styled.div`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ModalContents = styled.div`
  font-size: 18px;
`;
const ModalCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;
const OpenModal = (props) => {
   return (
      <ModalWrapper>
         <Modal>
            <ModalContents>이것은 모달입니다</ModalContents>
            <ModalCloseButton onClick={props.onClickCloseModal}>
               닫기
            </ModalCloseButton>
         </Modal>
      </ModalWrapper>
   );
};

const Quiz03_02 = () => {
   const [toggleModal, setToggleModal] = useState(false);
   const onClickOpenModal = () => {
      setToggleModal(true);
   };
   const onClickCloseModal = () => {
      setToggleModal(false);
   };
   return (
      <>
         <Container>
            {toggleModal ? (
               <OpenModal onClickCloseModal={onClickCloseModal} />
            ) : (
               ""
            )}
            {/* {toggleModal && <OpenModal />} */}

            <Wrapper>
               <ModalButton onClick={onClickOpenModal}>Open Modal</ModalButton>
            </Wrapper>
         </Container>
      </>
   );
};
export default Quiz03_02;