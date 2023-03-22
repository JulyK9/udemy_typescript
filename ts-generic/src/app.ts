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

// 다른 제네릭 함수 만들어보기

// 객체가 숫자를 반환해야할 length 속성을 지니도록 보장
interface Lengthy {
  length: number;
}

// function countAndDescribe<T>(element: T) {
// function countAndDescribe<T extends Lengthy>(element: T) { // 제약조건 설정
// function countAndDescribe<T extends Lengthy>(element: string | Array): [T, string] {
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  // 튜플 반환 입력
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' element.';
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe('Hi there!')); // 문자열
console.log(countAndDescribe(['Sports', 'Cooking'])); // 배열
// console.log(countAndDescribe([]));
// console.log(countAndDescribe(10)); // 오류: 숫자는 length 속성을 지니지 않으므로

// keyof 제약조건
// function extractAndConvert(obj: object, key: string) {
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  // 첫번째 매개변수는 어떤 형태의 객체여야하고, 두번째 매개변수는 첫번째 매개변수 객체의 모든 유형의 키여야 한다고 설정한 것
  return 'Value: ' + obj[key]; // 에러: 인자의 객체가 무엇이든간에 해당 키를 가지는지는 알 수 없으므로 => 이를 보장하기 위해 제네릭 타입 사용
}

// console.log(extractAndConvert({}, 'name')); // 에러: 첫번째 매개변수 객체에 name 키가 없으므로
console.log(extractAndConvert({ name: 'Bruno' }, 'name'));
// console.log(extractAndConvert({ name: 'Bruno' }, 'age')); // 에러: 존재하지 않는 접근하기 때문

// 제네릭 클래스

// class DataStorage {  // 주의: Storage는 예약어임
// class DataStorage<T> {
class DataStorage<T extends string | number | boolean> {
  // class DataStorage {
  private data: T[] = [];
  // private data: (string | number | boolean)[] = [];
  // private data: string[] | number[] | boolean[] = [];

  addItem(item: T) {
    // addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // removeItem(item: string | number | boolean) {
    // 잘못된 아이템 제거 방지
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10)
textStorage.addItem('Bruno');
textStorage.addItem('Max');
textStorage.removeItem('Bruno');
console.log(textStorage.getItems());

// const numberStorage = new DataStorage();
const numberStorage = new DataStorage<number>();
// const numberStorage = new DataStorage<number | string>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' }; // 같은 객체를 전달하기 위한 상수화 작업

// // objStorage.addItem({ name: 'Max' });
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Bruno' });
// // ...
// // objStorage.removeItem({ name: 'Max' });
// objStorage.removeItem(maxObj);
// // => 문제: 객체나 배열로 작업할 경우 indexof가 제대로 작동안됨(참조타입이므로 인자로 들어간 객체는 완전 새로운 객체임)
// // 결국 일치하는 요소를 찾지 못하고 배열에서 마지막 요소를 제거하게 되고 indexof는 -1을 반환함
// console.log(objStorage.getItems());

// 내장된 파셜(Partial) 타입
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // return { title: title, description: description, completeUntil: date };
  // let courseGoal: CourseGoal = {};
  // 파셜 타입은 타스에게 중괄호 쌍이 CourseGoal이 되는 객체임을 알려줌
  // => 따라서 중괄호 쌍을 빈 객체로 설정하여 단계적으로 모든 요소를 추가할 수 있음
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // return courseGoal;
  return courseGoal as CourseGoal; // CourseGoal 타입으로 반환하기 위해 형 변환하여 해결
}

// Readonly 내장 유틸리티 타입
// 참고로 배열 뿐만 아니라 객체에 대해서도 Readonly 를 사용할 수 있음
// const names = ['Max', 'Anna'];
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
