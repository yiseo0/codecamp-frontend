import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

interface IBlueButtonProps {
  button: string;
}

export const BlueButton = styled.button`
  background-color: ${(props: IBlueButtonProps) => (props.button ? "yellow" : "blue")};
`;
