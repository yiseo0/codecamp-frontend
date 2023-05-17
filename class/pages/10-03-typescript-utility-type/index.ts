export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial(파셜) 타입
// 모든 키가 있어도 되고 없어도 됨 ( ? 로 적용)
// export interface IProfile {
//    name?: string;
//    age?: number;
//    school?: string;
//    hobby?: string;
//  }
type aaa = Partial<IProfile>;

// 2. Required 타입
// 모든 키 필수
// export interface IProfile {
//    name: string;
//    age: number;
//    school: string;
//    hobby: string;
//  }
type bbb = Required<IProfile>;

// 3. Pick 타입
// 키 선택
// export interface IProfile {
//   name: string;
//   age: number;
// }
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
// 키 제외
// export interface IProfile {
//   school: string;
// }
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
// 5-1. union 타입
type eee = "철수" | "영희" | "훈이";
let child1: eee = "철수"; // 철수, 영희, 훈이만 지정 가능
let child2: string = "금자";

// 5-2. Record 타입
type fff = Record<eee, IProfile>;
// type fff = {
//    "철수" : IProfile,
//    "영희" : IProfile,
//    "훈이" : IProfile
// }

// 6. 객체의 키들을 Union 타입으로 만들기
type ggg = keyof IProfile; //"name" | "age" | "school" | "hobby"
let myProfile : ggg = "hobby"
// let myProfile : ggg = "123"

// 7. interface와 type의 차이 : 선언병합
// interface는 선언병합 가능, type은 불가

// 7-1. interface 선언병합
export interface IProfile {
    candy : number
} 

// 응용
type IProfile2 = Partial<IProfile>
let profile : IProfile2 = {
   candy : 1
}
