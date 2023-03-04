class Department {
  // 정적 속성 설정
  static fiscalYear = 2020; // 인스턴스화 하지 않고 사용할 수 있도록 static 으로 작업

  // 클래스의 필드(키값 쌍이 아니고 키 이름만 정의함)
  // private id: string;
  // private readonly id: string; // readonly 를 추가하여 초기화후에 변경되어서는 안되는 필드를 지정해줄 수 있음(id 같은 고유한 필드들)
  // name: string;
  // public name: string; // public을 붙이는 것은 기본값이라서 안붙여줘도 됨
  // private name: string;

  // employees: string[] = [];
  // private employees: string[] = []; // private을 통해 생성된 객체 내부에서만 접근할 수 있는 속성으로 만들어줌
  protected employees: string[] = []; // protected 는 private 과 비슷하지만 확장된 클래스에서도 접근,사용 가능하도록 만들어줌

  // name: string = 'Default' // 초기값을 지정할 수도 있음

  // 생성자 함수는 이 클래스와 연결되며
  // 객체가 생성되면서 실행되는 클래스에 기반하여 만드는 모든 객체에도 연결되는 함수로
  // 이를 활용하여 구축하는 객체에 대한 초기화 작업을 수행
  // 생성자 함수는 클래스를 인스턴스화 할 때 호출하는 유틸리티 함수임
  // constructor(id: string, n: string) {
  // readonly 를 추가하여 초기화후에 변경되어서는 안되는 필드를 지정해줄 수 있음(id 같은 고유한 필드들)
  // constructor(private readonly id: string, public name: string) {
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;

    // 정적 속성 접근
    // console.log(this.fiscalYear); // 오류
    console.log(Department.fiscalYear); // 정상
    // fiscalYear는 static으로 생성된 속성이라 this를 통해서는 접근 불가
    // this는 클래스를 기반으로 생성된 인스턴스를 참조하기 때문
  }

  // 정적 메소드 설정
  // 이 클래스를 인스턴스화하지 않고 접근할 수 있는 정적 메소드로 만들기 위해서
  // 정적 키워드인 static을 추가하고 객체를 반환
  static createEmployee(name: string) {
    return { name: name };
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
    // this.id = "d2"; // readonly 설정으로 불가함
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  // 생성자를 추가하여 고유 생성자를 추가할 수도 있음
  // 생성자에서 먼저 super를 호출하고 this 키워드를 사용하여 작업
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // 게터 설정
  get mostRecentReport() {
    // 게터 메소드는 반드시 무언가를 반환하도록 작성해야 함
    // 이 안에서 세부적인 로직을 작성해주면 됨
    if (this.lastReport) {
      return this.lastReport; // private 이었지만 접근가능하도록 캡슐화 해줌ㄹ
    }
    throw new Error("No report found.");
  }

  // 세터 설정
  set mostRecentReport(value: string) {
    // 이 안에서 세부적인 로직을 작성해주면 됨
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    // 자식(확장된) 클래스 고유의 메서드를 추가하여 적용할 수 있음
    if (name === "Max") {
      return;
    }
    this.employees.push(name); // protected 키워드로 변경해야 부모(기본) 클래스의 속성인 employees에 접근 가능
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// 정적 메소드의 사용(new 키워드 없이 직접 클래스에서 호출)
// 클래스를 그룹화 메커니즘으로 사용하는 것
const employee1 = Department.createEmployee("Max");
// console.log("employee1: ", employee1);

// 정적 속성 사용(접근)
console.log(employee1, Department.fiscalYear);

// new 키워드를 통해 객체를 생성함
// const accounting = new Department("Accounting");
// const accounting = new ITDepartment("d1", "Accounting");
// const accounting = new ITDepartment("d1");
// const accounting = new ITDepartment("d1", ["Bruno", "Sam"]);
const it = new ITDepartment("d1", ["Bruno", "Sam"]);
// console.log(accounting);

Math.PI;

// accounting.addEmployee("Max"); // 직원을 추가하는 메서드 사용
it.addEmployee("Max"); // 직원을 추가하는 메서드 사용
// accounting.addEmployee("Manu");
it.addEmployee("Manu");

// 이렇게 추가할 수도 있지만 협업차원과 코드 통일성 차원에서 한가지 방법으로 통일하는 게 좋다.
// 게다가 기존 추가 방식인 메서드 내용이 일부 추가 되거나 변경되면(유효성 검사라던가) 그 변경이 함께 적요되지 않기 때문임.
// 따라서 클래스 외부에서 employees(클래스 필드)에 접근하는 것을 허용하면 안되는데 이럴 private 키워드로 해결할 수 있음
// accounting.employees[2] = "Anna"; // private 을 추가하면 접근할 수 없음
// accounting.name = 'NEW NAME'; // public 은 접근할 수 있음

// accounting.describe(); // Department: Accounting
it.describe(); // Department: Accounting
// accounting.printEmployeeInformation();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

// 세터 실행: 등호를 추가하여 해당하는 값을 설정해줌(게터처럼 메소드가 아닌 속성값으로 접근해야함)
// accounting.mostRecentReport = "";
accounting.mostRecentReport = "Year End Report";

accounting.addReport("Something went wrong...");

// 게터 실행
console.log(accounting.mostRecentReport); // 주의: 속성으로써 접근해야지 메소드로 보고 () 붙이면 안됨

accounting.addEmployee("Bruno");
accounting.addEmployee("Max");

accounting.printReports();

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
