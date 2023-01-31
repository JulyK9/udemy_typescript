let userInput: unknown;
// let userInput; // 이것들과는 다름
// let userInput: any; // 이것들과는 다름
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput; // 에러

if (typeof userInput === "string") {
  userName = userInput; // 타입 체크로 타입 제한을 해줘야 에러 안남
}

// 에러 객체를 생성하여 넘기는 유틸 함수
function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

// generateError("An error occured!", 500);
const result2 = generateError("An error occured!", 500);
console.log(result);
