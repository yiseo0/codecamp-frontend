import { useState } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import { Modal } from 'antd';

export default function AlertPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [address, setAddress] = useState<any>({})

   const showModal = () => {
      setIsModalOpen(prev => !prev);
   };
   const handleComplete = (address: Address): void => {
      setAddress(address)
      showModal()
   }

   console.log(address)


   return (
      <>
         <button onClick={showModal}>모달열기</button>
         {
            isModalOpen &&
            <Modal open={true} onOk={showModal} onCancel={showModal}>
               <DaumPostcodeEmbed onComplete={handleComplete} />
            </Modal>
         }
         {
            address?.address
         }

      </>
   );
}