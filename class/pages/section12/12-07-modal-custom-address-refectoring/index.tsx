import { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

export default function ModalCustomPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsOpen(prev => !prev);
  }

  const handleComplete = (address: Address): void => {
    console.log({ address })
    onToggleModal()
  }


  return <>
    <button onClick={onToggleModal}>
      모달창 열기
    </button>

    {isOpen &&
      <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
        <p>주소 입력: <DaumPostcodeEmbed onComplete={handleComplete} /></p>
      </Modal>
    }
  </>
}
