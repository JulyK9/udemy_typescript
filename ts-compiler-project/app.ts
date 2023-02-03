// // console.log('Time to get started...');

// const userName = "Bruno333";

// // userName = 5;

// console.log(userName);

// // watch 모드 커맨드 명령
// // tsc app.ts -w or --watch

// lib는 dom으로 작업을 수행하는 항목들, 기본 객체, 기능, 타입스크립트 노드를 지정하게 해주는 옵션 테스트를 위한 코드
const button = document.querySelector("button")!;
// 느낌표는 기본적으로 버튼이 존재하므로 값이 반환될거라고 ts에 알려주는 것

button.addEventListener("click", () => {
  console.log("Clicked!");
});
