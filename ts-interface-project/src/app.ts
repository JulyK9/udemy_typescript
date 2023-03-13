// 속성의 이름, 속성에 저장될 값의 타입이나 필드 정의를 추가
// type Person = {
// interface Person {
// 인터페이스를 어떤 상수나 변수의 타입으로 사용하여 인터페이스 타입을 기반으로 하는 다른 타입의 클래스를 저장할 수 있음
// 인터페이스 내에 readonly 제어자도 추가할 수 있지만 public, private 등은 지정할 수 없음
interface Greetable {
  // name: string = 'Bruno'; // 인터페이스는 초기값을 가질 수 없음 => 구조만 있을 뿐임
  // readonly 를 추가하여 인터페이스를 기반으로 구축하는 모든 객체의 속성이 한번만 설정되어야하며
  // 이후에는 읽기 전용으로 설정하여 객체가 초기화되면 변경할 수 없도록 할 수 있음
  readonly name: string;
  // age: number;

  // 메소드 추가
  // 메소드도 실제 메소드를 추가하는게 아니라 구조와 어떤 형태여야 하는지 설명을 추가하여
  // Person 객체가 가질 메소드를 정의하는 것
  greet(phrase: string): void;
}

// Greetable 인터페이스를 사용해 여러 클래스 간에 공유할 수 있고
// 이 인터페이스를 준수하는 모든 클래스가 name 클래스와 greet 메소드를 갖도록 하기 위해 클래스를 추가
// 쉼표로 구분하여 여러 개의 인터페이스를 구현할 수 있다는 것이 상속과 차이점임
// class Person implements Greetable, AnotherInterface {
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// 먼저, 초기값은 할당하지 않고 인터페이스를 타입으로 설정해줄 수 있음
// let user1: Person;
let user1: Greetable;
// user1에 저장한 Person 객체는 Greetable 인터페이스에 기반한 것

// 선언한 user1을 타입에 근거에 값을 할당해주고 메소드를 설정해줌
// user1 = {
//   name: "Bruno",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person('Max');
// 클래스에서 readonly를 추가하지 않아도 인터페이스에서 readonly 속성으로 설정해서 에러 발생
// 왜냐하면 클래스는 Greetable을 구현한다는 것을 인지하기 때문
// user1.name = 'Manu';

// user1 객체의 메소드 사용
user1.greet('Hi there');

console.log(user1);
