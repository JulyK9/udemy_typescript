function add2(n1, n2) {
    return n1 + n2;
    // return n1.toString() + n2.toString();
}
// void 반환 타입
// function printResult2(num: number) { // 추론방식(더 나음)
function printResult2(num) {
    // 명시적 표시
    console.log("Result: " + num);
}
printResult2(add2(5, 12));
console.log(printResult2(add2(5, 12)));
