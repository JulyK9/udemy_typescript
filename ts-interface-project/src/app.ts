// 함수의 타입 정의
// type AddFn = (a: string, b:string) => number

// 인터페이스를 함수 타입으로서 사용하고자 할 때
interface AddFn {
  (a: number, b: number): number; // 메소드 이름만 추가하지 않을 뿐 메소드 추가 형태와 동일
}

let add: AddFn;

add = (n1: number, n2: number) => {
  // add = (n1: string, n2: number) => {
  return n1 + n2;
};

interface Named {
  // readonly name: string;
  readonly name?: string;
  // 속성 이름 다음에 물음표를 추가해서 선택적 속성을 지정할 수 있음
  // 이 속성이 인터페이스를 구현하는 클래스 내에 있을 수 있지만 반드시 그렇지는 않음을 인식하게 해줌
  outputName?: string;

  // greet?(): void; // 메소드 이름에도 물을표를 붙여서 선택적 메소드를 사용할 수 있음
}

// 속성의 이름, 속성에 저장될 값의 타입이나 필드 정의를 추가
// type Person = {
// interface Person {
// 인터페이스를 어떤 상수나 변수의 타입으로 사용하여 인터페이스 타입을 기반으로 하는 다른 타입의 클래스를 저장할 수 있음
// 인터페이스 내에 readonly 제어자도 추가할 수 있지만 public, private 등은 지정할 수 없음

// 인터페이스를 여러개 확장할 수 있음(여러 인터페이스로부터 상속받을 수 있음)
// interface Greetable {
// interface Greetable extends Named, AnotherInterface {
// 단, 클래스는 하나의 클래스로부터만 상속할 수 있고, 다수의 클래스로부터는 상속할 수 없음
interface Greetable extends Named {
  // name: string = 'Bruno'; // 인터페이스는 초기값을 가질 수 없음 => 구조만 있을 뿐임
  // readonly 를 추가하여 인터페이스를 기반으로 구축하는 모든 객체의 속성이 한번만 설정되어야하며
  // 이후에는 읽기 전용으로 설정하여 객체가 초기화되면 변경할 수 없도록 할 수 있음
  // readonly name: string;
  // age: number;

  // 메소드 추가
  // 메소드도 실제 메소드를 추가하는게 아니라 구조와 어떤 형태여야 하는지 설명을 추가하여
  // Person 객체가 가질 메소드를 정의하는 것
  greet(phrase: string): void;
}

// 인터페이스를 나누는 이유
// 객체마다 필요하고 사용할 속성과 메소드가 다를 수 있기 때문
// 어떤 객체에는 name을 입력하고 greed 메소드는 제외하는 한편
// 다른 객체에는 greet과 name을 입력하고자 한다면 이런 식으로 나눌 수 있기 때문

// Greetable 인터페이스를 사용해 여러 클래스 간에 공유할 수 있고
// 이 인터페이스를 준수하는 모든 클래스가 name 클래스와 greet 메소드를 갖도록 하기 위해 클래스를 추가
// 쉼표로 구분하여 여러 개의 인터페이스를 구현할 수 있다는 것이 상속과 차이점임
// class Person implements Greetable, AnotherInterface {
class Person implements Greetable, Named {
  // name: string;
  name?: string; // 선택적 옵션으로 클래스에 입력하면 모든 경우마다 값을 할당할 필요가 없음
  age = 30;

  // constructor(n: string) {
  constructor(n?: string) {
    // this.name = n;
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    // console.log(phrase + ' ' + this.name);
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
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
