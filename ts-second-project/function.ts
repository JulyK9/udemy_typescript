function add2(n1: number, n2: number) {
  return n1 + n2;
  // return n1.toString() + n2.toString();
}

// void 반환 타입
// function printResult2(num: number) { // 추론방식(더 나음)
function printResult2(num: number): void {
  // 명시적 표시
  console.log("Result: " + num);
}

// 주의 undefined를 반환한다는 의미는 void 와는 다름
function printResult3(num: number): undefined {
  // 명시적 표시
  console.log("Result: " + num);
  return; // 값을 반환하지 않는 반환문이 있는 것임. 따라서 함수는 undefined 타입임
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult2(add2(5, 12)); // Result: 17
console.log(printResult2(add2(5, 12))); // undefined, 아무것도 반환하지 않는 함수의 반환값을 사용했기때문

// let combineValues: Function;  // 인수가 2개인데도 허용해줘버리는 문제
let combineValues: (a: number, b: number) => number;

combineValues = add2;
// combineValues = printResult2;
// combineValues = 5;

console.log(combineValues(8, 8));

// undefined는 타입스크립트에서 유효한 타입중 하나임
// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
