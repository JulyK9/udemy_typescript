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

const add2 = (a: number, b: number) => {
  return a + b;
};

console.log(add2(2, 5));

// 표현식이 하나뿐인 경우 중괄호를 생략하면 해당 표현식의 결과가 자동으로 반환됨(return이 암묵적으로 있음)
const add3 = (a: number, b: number) => a + b;

const printOutput = (output: string | number) => {
  console.log(output);
};
printOutput(add2(2, 5));

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
