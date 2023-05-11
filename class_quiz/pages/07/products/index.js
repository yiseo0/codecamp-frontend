/*
Map / Filter를 이용하여 게시물 목록 구현하기

폴더: `/class_quiz/pages/07/products/` 안에서 퀴즈를 수행해주세요. 

1. fetchProducts를 활용하여 상품 목록을 화면에 출력해 주세요.
2. 상품 목록의 각 행 왼쪽에 체크박스를 만들어 주세요.
3. 상품 목록의 각 행 오른쪽에 삭제 버튼을 만들어 주세요.
4. 체크박스를 체크하고 삭제 버튼을 클릭하면, 해당 줄을 삭제해 주세요.
5. refetchQueries를 활용하여 표를 업데이트 해주세요.
6. 체크박스에 체크도 사라져있는지 확인하고, 사라지지 않았다면 이유는 무엇인지, 사라지도록 만들려면 어떻게 해야하는지 구현해 보세요.
*/

import BoardList from "@/src/components/units/board/list/BoardList.container";

export default function ProductsListPage() {
  return <BoardList />;
}
