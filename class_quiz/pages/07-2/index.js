export default function BonusPage() {
  const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
  ];

  const fruits = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
  ];

  const data = classmates
    .filter((el) => el.school === "토끼초등학교")
    .map((el) => {
      return { ...el, candy: 10 };
    });

  const data2 = classmates
    .filter((el) => el.school === "다람쥐초등학교")
    .map((el) => {
      return { ...el, name: el.name + "어린이" };
    });

  console.log(data2);

  return (
    <div>
      {fruits.filter(el => !(el.number % 2)).map((el) => (
        <p key={el.number}>{el.number}</p>
      ))}
    </div>
  );
}
