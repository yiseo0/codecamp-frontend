import styled from "@emotion/styled";
import { Rate } from 'antd';
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 50px;
  color: red;
`

export default function LibraryIconPage(): JSX.Element {
  const [value, setValue] = useState(0)

  // const onChange = (value: number): void => {
  //   setRate(value)
  // }

  console.log(value)

  return (
    <MyStar onChange={setValue} />
    // <MyStar onChange={(value) => setValue(value)} />
  );
}
