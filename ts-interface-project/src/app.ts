class Department {
  // 클래스의 필드(키값 쌍이 아니고 키 이름만 정의함)
  // private id: string;
  // name: string;
  // public name: string; // public을 붙이는 것은 기본값이라서 안붙여줘도 됨
  // private name: string;

  // employees: string[] = [];
  private employees: string[] = []; // private을 통해 생성된 객체 내부에서만 접근할 수 있는 속성으로 만들어줌

  // name: string = 'Default' // 초기값을 지정할 수도 있음

  // 생성자 함수는 이 클래스와 연결되며
  // 객체가 생성되면서 실행되는 클래스에 기반하여 만드는 모든 객체에도 연결되는 함수로
  // 이를 활용하여 구축하는 객체에 대한 초기화 작업을 수행
  // 생성자 함수는 클래스를 인스턴스화 할 때 호출하는 유틸리티 함수임
  // constructor(id: string, n: string) {
  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // 생성된 객체에서 호출할 수 있는 함수나 메서드를 추가할 수 있음
  // describe가 실행될 때 this는 Department 클래스에 기반한 인스턴스를 참조해야 하므로 객체는 결국 Department 타입이 됨
  describe(this: Department) {
    // console.log("Department: " + this.name);
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// new 키워드를 통해 객체를 생성함
// const accounting = new Department("Accounting");
const accounting = new Department("d1", "Accounting");
// console.log(accounting);

accounting.addEmployee("Max"); // 직원을 추가하는 메서드 사용
accounting.addEmployee("Manu");

// 이렇게 추가할 수도 있지만 협업차원과 코드 통일성 차원에서 한가지 방법으로 통일하는 게 좋다.
// 게다가 기존 추가 방식인 메서드 내용이 일부 추가 되거나 변경되면(유효성 검사라던가) 그 변경이 함께 적요되지 않기 때문임.
// 따라서 클래스 외부에서 employees(클래스 필드)에 접근하는 것을 허용하면 안되는데 이럴 private 키워드로 해결할 수 있음
// accounting.employees[2] = "Anna"; // private 을 추가하면 접근할 수 없음
// accounting.name = 'NEW NAME'; // public 은 접근할 수 있음

accounting.describe(); // Department: Accounting
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// console.log(accountingCopy); // {decribe: undefined}
// accountingCopy.describe(); // Department: undefined
// accountingCopy.describe(); // Department: DUMMY
// => 클래스를 기반으로 하지 않고 더미 객체로 생성되었기 때문
// => this가 생성된 accounting 객체에서 메서드를 요청하는 것이 아니라
// accountingCopy에서 describe를 호출하기 때문(이 객체는 name 속성이 없으므로 undefined)
// 클래스 메서드에 this를 매개변수로 추가해주고 Department 타입을 지정해주면 에러 확인 가능(Department의 인스턴스에서 호출한게 아니므로)
