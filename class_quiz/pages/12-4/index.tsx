import { useState } from "react";


export default function RatePage() {
   const [rate, setRate] = useState(0)

   return (
      <>
         <div>
            {Array(5).fill(0).map((_, idx) =>
               <img
                  src={`/12-4/rate_${rate > idx ? 'on' : 'off'}.png`}
                  alt=""
                  onClick={() => setRate(idx + 1)} />
            )}
         </div>
      </>
   );
}