import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

interface IProps {
  button: string;
}

export const BlueButton = styled.button`
  background-color: ${(props: IProps) => (props.button ? "yellow" : "blue")};
`;
