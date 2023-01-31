let userInput: unknown;
// let userInput; // 이것들과는 다름
// let userInput: any; // 이것들과는 다름
let userName: string;

userInput = 5;
userInput = "Max";

userName = userInput; // 에러

if (typeof userInput === "string") {
  userName = userInput; // 타입 체크로 타입 제한을 해줘야 에러 안남
}
