import { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

export default function ModalCustomPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (address: Address): void => {
    console.log({ address })
    setIsOpen(false);
  }


  return <>
    <button onClick={showModal}>
      모달창 열기
    </button>

    {/* 모달 종료방식 - 1. 모달 숨기기 */}
    {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>주소 입력: <DaumPostcodeEmbed onComplete={handleComplete} /></p>
    </Modal> */}

    {/* 모달 종료방식 - 2. 모달 삭제하기 (조건부 렌더링) */}
    {isOpen &&
      <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
        <p>주소 입력: <DaumPostcodeEmbed onComplete={handleComplete} /></p>
      </Modal>
    }
  </>
}
