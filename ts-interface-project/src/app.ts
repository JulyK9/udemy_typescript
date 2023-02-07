class Department {
  // 클래스의 필드(키값 쌍이 아니고 키 이름만 정의함)
  name: string;

  // name: string = 'Default' // 초기값을 지정할 수도 있음

  // 생성자 함수는 이 클래스와 연결되며
  // 객체가 생성되면서 실행되는 클래스에 기반하여 만드는 모든 객체에도 연결되는 함수로
  // 이를 활용하여 구축하는 객체에 대한 초기화 작업을 수행
  constructor(n: string) {
    this.name = n;
  }
}

// new 키워드를 통해 객체를 생성함
const accounting = new Department("Accounting");

console.log(accounting);
