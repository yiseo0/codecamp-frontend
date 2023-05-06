import styled from "@emotion/styled";

export const Wrapper = styled.div`
   max-width: 640px;
   margin: 0 auto;
   padding: 0 50px;
   background: url('./02-5/bg.png') no-repeat 0 0/cover;
   box-sizing: border-box;
`
export const CenterBox = styled.div`
   padding-top: 228px;
`
export const Image = styled.div`
   margin-bottom: 23px;
   text-align: center;
` 
export const Bar = styled.div`
   margin: -12px auto 0;
   width: 72px;
   height: 24px;
   background: #D9D9D9;
   opacity: 0.6;
   border-radius: 50px;
`
export const Title = styled.div`
   margin-bottom: 144px;
   font-weight: 700;
   font-size: 60px;
   line-height: 87px;
   color: #FFFFFF;
   text-align: center;
`
export const InputBox = styled.div`
   position:relative;
`
export const InputBoxPassword = styled(InputBox)`
margin-top: 38px;
`
export const Input = styled.input`
   width: 100%;
   padding: 0 20px 7px 0;
   background: none;
   border: 0;
   border-bottom: 1px solid #7D7D7D;
   outline: 0;
   font-weight: 400;
   font-size: 24px;
   line-height: 35px;
   color: #fff;
   box-sizing: border-box;
`
export const InputClearBtn = styled.span`
   position: absolute;
   right: 0;
   top:50%;
   transform:translateY(-50%);
   width: 20px;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align:center;
   background: #FFFFFF;
   opacity: 0.5;
   border-radius: 50%;
`
export const Message = styled.div`
   margin-top: 5px;
   font-weight: 400;
   font-size: 16px;
   line-height: 23px;
   color: #FF1B6D;
`
export const SubmitBtn = styled.input`
   width: 100%;
   height: 76px;
   background: rgba(255, 27, 109, 0.6);
   border-radius: 38px;
   font-weight: 700; 
   font-size: 26px;
   line-height: 38px;
   color: #FFFFFF;
   margin: 20px 0 38px;
`
export const LookBox = styled.div`
   display: flex;
   justify-content: center;
   list-style: none;
   font-weight: 700;
   font-size: 20px;
   line-height: 29px;
   color: #fff;
   margin-bottom: 58px;
   & > li {
      &:not(:last-child)::after {
         content: "";
         display: inline-block;
         width: 1px;
         height: 21px;
         margin: 0 34px;
         background-color: #9F9F9F;
      }
   } 
`
export const KakaoLoginBtn = styled.button`
   width: 100%;
   height: 76px;
   font-weight: 700;
   font-size: 26px;
   line-height: 38px;
   color: #FAE100;
   border: 2px solid #FAE100;
   border-radius: 38px;
   background-color: transparent;
   margin-bottom: 83px;
`