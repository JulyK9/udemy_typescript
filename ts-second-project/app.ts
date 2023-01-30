// function combine(input1: number, input2: number) {
// function combine(input1: string, input2: string) {
function combine(
  input1: string | number,
  input2: string | number,
  // resultType: string
  resultType: "as-number" | "as-text" // 유니언 타입과 리터럴 타입의 결합 사용
) {
  // let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    // result = input1 + input2; // string 이나 number 이외의 타입이 올 수도 있어서 에러가 나는 것
    return +input1 + +input2; // string 이나 number 이외의 타입이 올 수도 있어서 에러가 나는 것
    // return input1 + input2; // string 이나 number 이외의 타입이 올 수도 있어서 에러가 나는 것
  }
  // else if (resultType === "as-number") {
  //   return +input1 + +input2;
  // }
  else {
    // result = input1.toString() + input2.toString();
    return input1.toString() + input2.toString();
  }
  // return result;
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);

// const combinedNames = combine("Max", "Bruno");
// console.log(combinedNames);

const combinedNames = combine("Max", "Bruno", "as-text");
console.log(combinedNames);
