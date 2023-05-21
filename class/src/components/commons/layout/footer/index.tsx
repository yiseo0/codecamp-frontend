import styled from "@emotion/styled";

const Wrapper = styled.div`
   height: 100px;
   background-color: yellow;

`
export default function LayoutFooter(): JSX.Element {
   return (
      <>
         <Wrapper>여기는 푸터입니다.</Wrapper>
      </>
   );
}