
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';


export default function daumPostcodePage() {
   const handleComplete = (address: Address): void => {
      console.log({ address })
   }

   return (
      <>
         <DaumPostcodeEmbed onComplete={handleComplete} />
      </>
   );
}