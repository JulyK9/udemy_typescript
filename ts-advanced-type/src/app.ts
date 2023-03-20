// 인터섹션타입

// type Admin = {
interface Admin {
  name: string;
  privileges: string[];
}

// type Employee = {
interface Employee {
  name: string;
  startDate: Date;
}

// name, startDate, privileges 속성을 가진 객체 타입을 따로 정의하여 직접 만들 수도 있지만
// 이미 두 타입을 입력한 걸 이용하여 하나로 결합
// 인터섹션타입은 인터페이스 상속과 밀접한 관련

// type ElevatedEmployee = Admin & Employee
interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// => Universal을 숫자형 타입으로 간주함. 유일한 인터섹션 타입이기 때문(두 유니언 타입이 교차하는 유니언 타입)

// 함수 오버로드를 위한 라인 반복
// 이 함수 호출시 두 인수 모두 숫자형이면 숫자형을 반환한다고 해주고
// 두 인수 모두 문자열로 호출하면 문자열이 반환되도록 알려줌
// 참고로 이 때 오버로드로 매개변수를 더 많이 또는 더 적게 추가할 수도 있음
// function add(n: number): number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // function add(a: Combinable, b?: Combinable) {
  // return a + b;
  if (typeof a === 'string' || typeof b === 'string') {
    // 타입가드 라인
    return a.toString() + b.toString();
  }
  return a + b;

  // if (typeof a === 'number' && typeof b === 'number') {
  //   return a + b;
  // }
}

// 함수 오버로드 적용 예시
// const result = add('Max', 'Schwarz') as string;
const result = add('Max', 'Schwarz');
// const result = add(1, 'Schwarz');
// const result = add('Max', 1);
// const result = add(1, 2);
result.split(' ');

// 선택적체이닝(옵셔널체이닝)과 null 병합 연산자
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', discription: 'My own company' },
};

// console.log(fetchedUserData.job.title);
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);
// 문제는 컴파일 하려면 job이 에러 발생(job이 존재하지 않음을 타입스크립트가 알고 있기 때문에)

const userInput = null; // => 'DEFALUT'
// const userInput = undefined; // => 'DEFAULT'
// const userInput = ''; // => ''

// userInput이 null이나 undefined이면 'DEFAULT'라는 폴백값을 적용하도록
// 단축논리평가 표기법 활용: || 이므로 왼쪽값부터 봤을때 true가 먼저인 값을 취함
// 다만 이것은 빈문자열이나 0인 경우까지 포함함
// const storedData = userInput || 'DEFAULT';

// null 병합 연산자 ?? 사용
// null 이거나 undefined 둘중 하나라면(빈문자열이나 0인 경우는 제외) 폴백을 사용한다는 의미
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // 이 if 문들은 런타임시 실행되는 것이기 때문에 자바스크립트를 사용한다는 것을 염두해두어야함
  // if (typeof emp === 'object') // 해결할수 없음 => 객체에 속성이 있는지 여부를 알려줄수 없음
  // if (typeof emp === 'Employee') // 해결할수 없음 => 자바스크립트가 인식하는 타입이 아님
  // if (emp.privileges) { // 이렇게는 접근이 안됨
  if ('privileges' in emp) {
    // 자바스크립트에 내장된 in 키워드로 객체에 해당 속성이 존재하는지 접근하여 확인할 수 있음!
    console.log('Privileges: ' + emp.privileges); // Admin 만 가지는 속성이므로 이때 타입가드 활용
  }

  if ('startDate' in emp) {
    // 자바스크립트에 내장된 in 키워드로 객체에 해당 속성이 존재하는지 접근하여 확인할 수 있음!
    console.log('Privileges: ' + emp.startDate); // Admin 만 가지는 속성이므로 이때 타입가드 활용
  }
  // console.log('Privileges: ' + emp.privileges); // Admin 만 가지는 속성이므로 이때 타입가드 활용
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manu', startDate: new Date() }); // 필드가 없는 걸 전달하는 경우

// 클래스를 이용한 instanceof 타입가드
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading carge...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // vehicle.loadCargo(1000); // Truck에만 존재하므로 에러
  // if ('loadCargo' in vehicle) { // 타입가드를 붙여서 에러 처리
  if (vehicle instanceof Truck) {
    // instanceof를 써서 다른방식으로 타입가드 처리할 수 있음!(instanceof도 jS의 내장 일반 연산자임)
    // instanceof를 사용해 객체가 클래스에 기반하는지 확인할 수 있는 것임
    vehicle.loadCargo(1000);
  }
}

// 주의
// 인터페이스로는 instanceof를 쓸수 없다.
// 왜냐하면 인터페이스는 자바스크립트 코드로 변환되지 않기 때문에 런타임에서는 인터페이스를 사용할수 없으므로
// 클래스는 자바스크립트가 클래스와 생성자함수를 지원하기 때문에 사용 가능

useVehicle(v1);
useVehicle(v2);

// 구별된 유니언 패턴
// 타입가드를 쉽게 구별할 수 있게 해주는 유니언 타입

interface Bird {
  flyingSpeed: number;
  type: 'bird'; // bird가 type 속성에 해당하는 값이 아니라 type이 bird 여야 하는 문자열을 포함해야 하는 리터럴 타입이라는 것
}

interface Horse {
  runningSpeed: number;
  type: 'horse';
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // console.log('Moving with speed: ' + animal.flyingSpeed); // 에러: 모든 animal이 flyingspeed 속성을 가지진 않으므로
  // if ('flyingSpeed' in animal) { // 이러한 타입가드 방식은 휴먼에러 발생 가능성
  // if (animal instanceof Bird) { // 인터페이스로 구현하는 거라 instanceof는 쓸수 없음, 인터페이스는 자바스크립트로 컴파일되지 않으므로
  // => 이럴 때는 유니언과 추가 속성의 일부가 되어야 하는 객체를 인터페이스마다 입력하여 구별된 유니언을 구축하고 switch case 문을 통해 타입가드를 적용할 수 있음
  // if (animal instanceof Bird) {
  //   console.log('Moving with speed: ' + animal.flyingSpeed);
  // }

  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

// moveAnimal({type: 'bird', runningSpeed: 10}) // TS가 추론하여 에러 처리
moveAnimal({ type: 'bird', flyingSpeed: 10 }); // TS가 추론하여 에러 처리

// 형 변환
// const paragraph = document.querySelector('p') // HTMLParagraphElement 요소로 인식
// const paragraph = document.getElementById('message-out') // HTMLElemen 요소로 인식
// const userInputElement = document.getElementById('user-input'); // HTMLElemen 요소만 인식할 뿐 어떤 특정 HTML요소인지는 모름
// 첫번째 방법
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; //
// 두번째 방법
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; //
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}
// userInputElement.value = 'Hi there!';

// 선호하는 방법을 사용하되 프로젝트 전체적으로는 통일하여 일관성 유지할 것
// 참고 - 느낌표를 사용하여 느낌표 앞의 표현식을 null로 반환하지 않겠다고 타스에게 인식시킬 수 있는 것
// 즉 null을 반환할 수 있는 dom에서 무언가를 선택해야하는 경우 null을 반환하지 않을 것을 안다면 느낌표를 사용할 수 있음
// 하지만 null 반환이 확신되지 않는 경우는 if문을 사용하면 됨

// 인덱스 속성
// 사용자 입력 유효성을 검사하는 애플리케이션에서 여러 입력 필드가 필요할텐데
// 어떤 필드에 따라 각기 다른 에러 메시지를 저장해서 보여주고자 할 때
// 단, 컨테이너를 보다 유연하게 만들어 웹페이지의 어떤 양식에서든 사용할 수 있도록 하려고 함
// 즉 문자열을 가져야 하지만 몇 개의 속성을 가질지 어떤 속성이 어떤 이름을 가질지 미리 알 수 없을 때 인덱스타입 사용 가능
// 속성 이름도 모르고 속성 개수도 모르는 에러컨테이너 개반의 이 객체에 추가되는 모든 속성은 문자열로 해석될 수 있는 속성이름과 값을 가지고 있어야 함
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!'}
  // id: number; // 인덱스 타입 설정으로 인해 불가
  // id: string;
  [prop: string]: string; // 인덱스 타입 설정
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character',
};
