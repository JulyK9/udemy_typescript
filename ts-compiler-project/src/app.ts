// // console.log('Time to get started...');

// const userName = "Bruno333";

// // userName = 5;

// console.log(userName);

// // watch 모드 커맨드 명령
// // tsc app.ts -w or --watch

// lib는 dom으로 작업을 수행하는 항목들, 기본 객체, 기능, 타입스크립트 노드를 지정하게 해주는 옵션 테스트를 위한 코드
const button = document.querySelector("button")!;
// 느낌표는 기본적으로 버튼이 존재하므로(null이 아니고) 값이 반환될거라고 ts에 알려주는 것
// 비록 selector가 있지만 이 스크립트가 실행되는 페이지에 버튼이 없을 수도(null) 있기 때문

// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });

// if (button) {
//   button.addEventListener("click", () => {
//     console.log("Clicked!");
//   });
// }

let appId = "abc";
// 타입스크립트는 다른 스크립트 파일에서 전역적으로 정의된 값이 필요할 수도 있다는 것은 모르기 때문에
// noUnusedLocals 옵션 관련해서 appId는 허용되고 에러가 안남

// noImplicitReturns 옵션: return 생략 가능 여부
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

// function clickHandler(message: string, age: number) {
function clickHandler(message: string) {
  // let userName = "Max"; // 더 이상 필요하지 않는 함수에서 사용하지 않은 지역 변수나 전역 변수를 원치 않는다고 설정했기 때문 noUnusedLocals 옵션
  // console.log("Clicked" + message);
  console.log("Clicked " + message);
}

if (button) {
  // button.addEventListener("click", clickHandler.bind(null, 1));
  button.addEventListener(
    "click",
    clickHandler.bind(null, "You're welcome!", 30)
  );
  // clickHandler가 addEventListner로 전달되어 브라우저가 이 작업을 실행하므로
  // 전달될 인수를 재구성하고자 한다면 bind를 사용
  // bind는 우리가 이 키워드에 결합(bind)하고자 하는 항목도 취하는 첫 번째 함수임
  // 이 함수는 이 프로젝트에서 사용하지 않아 그렇게 중요하지 않으므로 null에 결합하도록 설정
}
