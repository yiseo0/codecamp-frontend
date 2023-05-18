import { FastBackwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(FastBackwardOutlined)`
  font-size: 50px;
  color: red;
`

export default function LibraryIconPage(): JSX.Element {
  return (
    <div>
      <i id="icon">
        <MyIcon />
      </i>
    </div>
  );
}
