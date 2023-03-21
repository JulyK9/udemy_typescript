// // const names = ['Max', 'Bruno']

// // const names: Array = [];
// // const names: any[] = []; // 배열 타입을 정의하는 방법중 하나

// // 배열 타입을 정의하는 다른 방법
// // 홑화살 괄호 안에 배열에 전달되어야 하는 데이터 타입을 지정
// const names: Array<string> = [];
// // const names: string[] = [] // 이것과 같은 표현임

// // 당연히 이렇게도 사용할 수 있음
// // const names: Array<string | number> = [];
// // const names: Array<any> = [];

// names[0].split(' '); // 연결된 names의 타입을 인식함

// // 이 프로미스가 문자열을 반환할 것이라고 제네릭 타입으로 구현
// // const promise = new Promise((resolve, reject) => {
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

// 제네릭 함수 생성
// function merge(objA: object, objB: object) {
// function merge<T, U>(objA: T, objB: U) {
// extends object: T 타입이 어떤 구조를 가진 객체가 되어도 상관없지만 일단은 객체가 되어야 한다는 의미
// function merge<T extends object, U>(objA: T, objB: U) {
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
  // return Object.assign({}, objA, objB);
}

// console.log(merge({ name: 'Max' }, { age: 30 })); // 정상 작동

// const mergedObj = merge({ name: 'Max' }, { age: 30 });
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, 30);
// const mergedObj = merge<string, number>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// const mergedObj = merge<object, object>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: 'Max', hobbies: ['Sports'] },
//   { age: 30 }
// );
const mergedObj2 = merge({ name: 'Max' }, { age: 30 });

// 아래와 같이 객체의 형태를 알려줄 수 있지만 매번 매우 번거로운 일
// const mergedObj = merge({ name: 'Max' }, { age: 30 }) as {name: string, age: number}
// mergedObj.name; // name에 접근할 수 없음(타스는 객체인 것만 알지 객체의 형태는 모르기 때문)
console.log(mergedObj.age);
