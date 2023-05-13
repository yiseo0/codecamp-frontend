export default function TypescriptPractice() {
  // #문자타입
  // 타입 추론
  // 타입을 명시하지 않아도 처음 들어온 값으로 타입을 추론함
  let aaa = "안녕하세요";

  // 타입 명시
  let bbb: string = "안녕하세요";

  //  선언과 할당 분리
  let ccc: string;
  ccc = "안녕하세요";

  // #숫자타입
  let ddd: number = 10;

  // #boolean타입
  let eee: boolean = true;
  eee = false;

  // #배열타입(숫자)
  let fff: number[] = [1, 2, 3];

  // #배열타입(문자)
  let ggg: string[] = ["철수", "영희"];

  // #배열타입(숫자 또는 문자)
  let hhh: (number | string)[] = ["철수", "영희", 10];

  // #객체타입
  interface IProfile {
    name: string;
    age: number | string;
  }
  const profile: IProfile = {
    name: "철수",
    age: 10,
  };
  profile.age = "8살";

  // #함수타입
  const add = (number1: number, number2: number, unit: string) : string => {
    return number1 + number2 + unit;
  };
  const result = add(1000, 2000, "원");

  // #any
  let qqq: any = "문자"
  qqq = 10
  qqq = true

  return <div>{aaa}</div>;
}
