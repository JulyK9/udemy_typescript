// function combine(input1: number, input2: number) {
// function combine(input1: string, input2: string) {
function combine(input1, input2) {
    // let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        // result = input1 + input2; // string 이나 number 이외의 타입이 올 수도 있어서 에러가 나는 것
        return input1 + input2; // string 이나 number 이외의 타입이 올 수도 있어서 에러가 나는 것
        // return input1 + input2; // string 이나 number 이외의 타입이 올 수도 있어서 에러가 나는 것
    }
    else {
        // result = input1.toString() + input2.toString();
        return input1.toString() + input2.toString();
    }
    // return result;
}
var combinedAges = combine(30, 20);
console.log(combinedAges);
var combinedNames = combine("Max", "Bruno");
console.log(combinedNames);
