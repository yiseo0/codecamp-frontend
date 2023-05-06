import styled from "@emotion/styled";
import Image from "next/image";

export const Wrap = styled.div`
   max-width:640px;
   margin: 0 auto;
   ul {
      margin: 0;
      padding: 0;
      list-style: none;
   }

   p {
      margin: 0;
      padding: 0;
   }
`

export const Header = styled.header`
   padding: 37px 48px;
   .header__search {
      text-align:right;
      margin-bottom: 32px;
   }

   .header__top {
      display: flex;
      justify-content: space-between;
      align-content: center;
      h1 {
         margin: 0;
         font-weight: 700;
         font-size: 40px;
         line-height: 58px;
         text-align: center;
      }
      &__item {
         display: flex;
         align-items: center;
         span {
            padding: 0 4.51px 0 19px;
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
         }
      }
      margin-bottom: 43px;
   }
`
export const Nav = styled.nav`
   padding: 43px 48px 51px;
   border-bottom: 1px solid #CACACA;
   ul {
      margin: 0;
      display: flex;
      gap:52px;
      li {
         font-weight: 700;
         font-size: 30px;
         line-height: 43px;
         color: #CACACA;
         padding-bottom: 7px;
         border-bottom: 1px solid transparent;
         &:hover {
            color:#FF1B6D;
            border-bottom-color: #FF1B6D;
         }
      }
   }
   
`
export const LoginMain = styled.main`
   padding: 25px 48px 54px;
   ul > li{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &:not(:last-child) {
         margin-bottom: 44px;
      }
      p {
         display: flex;
         gap:5px;
         flex-direction: column;
         font-weight: 400;
         font-size: 24px;
         line-height: 35px;
         color:#000;
         sup {
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #ADADAD;
         }
         
      }
   }
`

export const Footer = styled.footer`
   border-top:1px solid #DCDCDC;
   padding: 14px 0;
   ul {
      display: flex;
      justify-content: space-around;
      li {
         display: flex;
         flex-direction: column;
         align-items: center;
         gap:11px;
         font-weight: 400;
         font-size: 16px;
         color: #ADADAD;
         &:hover {
            span {color:#FF1B6D}
         }
      }
   }

`