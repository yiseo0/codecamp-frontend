import { Rate } from 'antd';
import { useState } from 'react'

export default function RatePage() {
   const [value, setValue] = useState(0)
   const onChange = (value: number) => {
      value === 3 && alert("별점 3점")
      setValue(value)
   }

   return (
      <div>
         <Rate onChange={onChange} /><br />
         {value}점
      </div>
   );
}