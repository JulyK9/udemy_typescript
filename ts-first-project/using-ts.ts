// 느낌표를 통해 요소를 얻을 것임을 TS에게 알려줌
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return +num1 + +num2; // number 타입이 아닌경우 number로 변경
//   }
// }

// JS는 상황을 특정해줘야 함. 이와 같은 한계를 보완하기 위해 TS사용

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  // 느낌표를 통해 요소를 얻을 것임을 인지하고 input에 대한 에러가 해제됨
  // as HTMLInputElement를 통해 해당 엘리먼트가 어떤 유형인지 알려줌으로써 value 에 대한 에러가 해제됨
  console.log(add(+input1.value, +input2.value));
});

// 다른 프로젝트 추가
