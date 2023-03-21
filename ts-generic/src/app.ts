// const names = ['Max', 'Bruno']

// const names: Array = [];
// const names: any[] = []; // 배열 타입을 정의하는 방법중 하나

// 배열 타입을 정의하는 다른 방법
// 홑화살 괄호 안에 배열에 전달되어야 하는 데이터 타입을 지정
const names: Array<string> = [];
// const names: string[] = [] // 이것과 같은 표현임

// 당연히 이렇게도 사용할 수 있음
// const names: Array<string | number> = [];
// const names: Array<any> = [];

names[0].split(' '); // 연결된 names의 타입을 인식함

// 이 프로미스가 문자열을 반환할 것이라고 제네릭 타입으로 구현
// const promise = new Promise((resolve, reject) => {
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});
