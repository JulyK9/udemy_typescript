// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Bruno",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']

// 전역 상수를 정희하고 관리: 휴먼에러 최소화
const ADMIN = 0; // 문자 대신 숫자를 사용하면 코드의 양과 메모리 점유를 줄일 수 있음!
const READ_ONLY = 1;
const AUTHOR = 2;

// 위의 상수화 관리를 enum으로 더 효과적으로 관리할 수 있음
enum Role {
  ADMIN = 5, // 식별자인 숫자를 커스텀하게 넘버링, 레터링할 수 있음
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
} // 자동으로 숫자가 할당됨, 대어보면 확인됨

const person = {
  name: "Bruno",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  // role: "READ ONLY USER",
  // role: ADMIN,
  role: Role.AUTHOR,
};

// let favoriteActivities: string[];
let favoriteActivities: any[];
// favoriteActivities = "Sports";
favoriteActivities = ["Sports", 1];
// favoriteActivities = ["Sports"];
// favoriteActivities = 4;

// console.log(person.nickname);
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // Error
}

// if (person.role === "READ-ONLY-USER") {
// if (person.role === ADMIN) {
if (person.role === Role.AUTHOR) {
  // console.log("is admin");
  console.log("is author");
}
