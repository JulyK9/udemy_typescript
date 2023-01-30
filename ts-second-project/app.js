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
var ADMIN = 0; // 문자 대신 숫자를 사용하면 코드의 양과 메모리 점유를 줄일 수 있음!
var READ_ONLY = 1;
var AUTHOR = 2;
// 위의 상수화 관리를 enum으로 더 효과적으로 관리할 수 있음
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // 자동으로 숫자가 할당됨, 대어보면 확인됨
var person = {
    name: "Bruno",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    // role: "READ ONLY USER",
    // role: ADMIN,
    role: Role.AUTHOR
};
var favoriteActivities;
// let favoriteActivities: any[];
// favoriteActivities = "Sports";
// favoriteActivities = ["Sports", 1];
favoriteActivities = ["Sports"];
// console.log(person.nickname);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // Error
}
// if (person.role === "READ-ONLY-USER") {
// if (person.role === ADMIN) {
if (person.role === Role.AUTHOR) {
    // console.log("is admin");
    console.log("is author");
}
