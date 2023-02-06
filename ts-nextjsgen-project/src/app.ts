const userName = "Max";
// userName = 'Maximilian';

let age = 30;
age = 29;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

// if (age > 20) {
//   let isOld = true;
//   console.log(isOld)
// }

// console.log(isOld)

// console.log(result)

const add2 = (a: number, b: number = 1) => {
  return a + b;
};

console.log(add2(2, 5));

// 표현식이 하나뿐인 경우 중괄호를 생략하면 해당 표현식의 결과가 자동으로 반환됨(return이 암묵적으로 있음)

// 기본값 인수를 허용하지 않는 매개변수가 기본값 매개변수 앞에 먼저 오도록 해야함
const add3 = (a: number, b: number = 1) => a + b;
// const add3 = (a: number = 1, b: number) => a + b;

const printOutput = (output: string | number) => {
  console.log(output);
};
printOutput(add2(2, 5));
printOutput(add3(5)); // 6 매개변수 b의 기본값이 1로 설정됨

// 하나의 매개변수만 취하는 함수를 사용하는 경우 괄호 생략 가능
// 단 ts에서는 타입배정을 생략하면 안되기 때문에 js 에서만 가능
// const printOutput2 = (output: string | number) => console.log(output);
// const printOutput2 = output: string | number => console.log(output);
// const printOutput2 = output => console.log(output); // js 에서는 가능

// 매개변수의 타입 정보를 다른 위치에서(함수 타입을 정하면서) 타입스크립트로 전달할 수도 있음
const printOutput2: (a: number | string) => void = (output) =>
  console.log(output);

// 코드의 양을 많이 줄이려면
const button = document.querySelector("button");

// button?.addEventListener('click', () => {})
button?.addEventListener("click", (event) => console.log(event));

const hobbies = ["sports", "cooking"];
// console.log(hobbies[0])
const activeHobbies = ["hiking", ...hobbies];

// activeHobbies.push(hobbies);
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
// activeHobbies = [...activeHobbies, ...hobbies]

const person = {
  name: "Bruno",
  age: 40,
};

// const copiedPerson = person;  // 원본 객체의 주소값만 복사

const copiedPerson = { ...person }; // 원본 객체의 완전한 복사본

// 나머지 매개변수의 사용

// const add5 = (...numbers: number[]) => {
const add5 = (...numbers: [number, number, number, number]) => {
  // 지원할 인수의 수를 아는 경우 튜플 타입으로 사용할 수도 있음
  // let result = 0;
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add5(5, 10, 2, 2.4);
console.log(addNumbers);
