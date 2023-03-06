// 속성의 이름, 속성에 저장될 값의 타입이나 필드 정의를 추가
interface Person {
  // name: string = 'Bruno'; // 인터페이스는 초기값을 가질 수 없음 => 구조만 있을 뿐임
  name: string;
  age: number;

  // 메소드 추가
  // 메소드도 실제 메소드를 추가하는게 아니라 구조와 어떤 형태여야 하는지 설명을 추가하여
  // Person 객체가 가질 메소드를 정의하는 것
  greet(phrase: string): void;
}

// 먼저, 초기값은 할당하지 않고 인터페이스를 타입으로 설정해줄 수 있음
let user1: Person;

// 선언한 user1을 타입에 근거에 값을 할당해주고 메소드를 설정해줌
user1 = {
  name: "Bruno",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

// user1 객체의 메소드 사용
user1.greet("Hi there");
