import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';

export default function DatePickerPage() {
   const [date, setDate] = useState("");

   const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
      setDate(dateString)
   };

   return (
      <Space direction="vertical">
         <DatePicker onChange={onChange} />
         {date.split('-')[1]}
      </Space>
   );
}