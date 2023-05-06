import { Header, LoginMain, Nav, Wrap, Search, Footer } from "@/styles/01/login";
import Image from "next/image";

export default function Login() {
   const data = [
      {
         id: 1,
         text: '리뷰 작성은 어떻게 하나요?',
      },
      {
         id: 2,
         text: '리뷰 수정/삭제는 어떻게 하나요?',
      },
      {
         id: 3,
         text: '아이디/비밀번호를 잊어버렸어요',
      },
      {
         id: 4,
         text: '회원탈퇴를 하고싶어요.',
      },
      {
         id: 5,
         text: '출발지 설정은 어떻게 하나요?',
      },
      {
         id: 6,
         text: '비밀번호를 변경하고 싶어요',
      },
   ]

   return (
      <>
         <Wrap>
            <Header>
               <div className="header__search">
                  <Image src="/01/icon_search.svg" alt="" width="19" height="19" />
               </div>
               <div className="header__top">
                  <h1>마이</h1>
                  <div className="header__top__item">
                     <Image src="/01/icon_thumb.svg" alt="" width="60" height="60" />
                     <span>임정아</span>
                     <Image src="/01/icon_arrow_next.svg" alt="" width="20" height="20" />
                  </div>
               </div>
            </Header>

            <Nav>
               <ul>
                  <li>공지사항</li>
                  <li>이벤트</li>
                  <li>FAQ</li>
                  <li>Q&A</li>
               </ul>
            </Nav>

            <LoginMain>
               <ul>
                  {
                     data.map(list => (
                        <li>
                           <p>
                              {
                                 list.id < 10 ?
                                    <sup>Q.0{list.id}</sup>
                                    :
                                    <sup>Q.{list.id}</sup>
                              }
                              <span>{list.text}</span>
                           </p>
                           <Image src="/01/icon_arrow_bottom.svg" alt="" width="30" height="30" />
                        </li>
                     ))
                  }
               </ul>
            </LoginMain>
            <Footer>
               <ul>
                  <li>
                     <Image src="/01/icon_home.svg" alt="" width="40.83" height="40.35" />
                     <span>홈</span>
                  </li>
                  <li>
                     <Image src="/01/icon_map.svg" alt="" width="35" height="43" />
                     <span>잇츠로드</span>
                  </li>
                  <li>
                     <Image src="/01/icon_heart.svg" alt="" width="40.02" height="32.99" />
                     <span>마이찜</span>
                  </li>
                  <li>
                     <Image src="/01/icon_person.svg" alt="" width="38" height="39" />
                     <span>마이</span>
                  </li>
               </ul>
            </Footer>
         </Wrap>
      </>
   );
}