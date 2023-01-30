// function combine(input1: number, input2: number) {
// function combine(input1: string, input2: string) {
function combine(input1, input2, resultType) {
    // let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
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
var combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);
// const combinedNames = combine("Max", "Bruno");
// console.log(combinedNames);
var combinedNames = combine("Max", "Bruno", "as-text");
console.log(combinedNames);
