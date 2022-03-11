// primitive 타입 string, number, boolean
/* let product_id: number = 123456

let product_name: string = 'VR 글래스'

let is_waterprofing: boolean =  false

console.log('product_id:', product_id)
console.log('product_name', product_name)
console.log('is_waterprofing', is_waterprofing) */



//any 타입
/* let explicit_type;

explicit_type = true
explicit_type = 'OK!'

console.log('explicit_type: ', explicit_type)

let implicit_type = false

implicit_type = 'No!'

console.log('implicit_type: ', implicit_type) */


// array 타입
/*let nums: number[] = [ 100, 101, 102 ];

let strs: string[] = ['ㄱ','ㄴ','ㄷ'];

let boos: boolean[] = [true, false, true];

let anys: any[] = [100, 'ㄴ', true]

let selects: (number|string)[] = [500, '안녕하세요']

console.log(nums, strs, boos, anys, selects)

let national_team_members = ['손흥민', '이승우', '이강인']

console.log(national_team_members)

let data_list = [
    { type: '뉴스' },
    false,
    x => Math.pow(x, 3)
];

console.log(data_list)

let only_num_str_boo = [];
only_num_str_boo.push(10)
only_num_str_boo.push(true)
only_num_str_boo.push('프로그래밍')

console.log(only_num_str_boo) */

// tuple 타입

/* let book__name_price:[string, number] = ['카밍 시그널', 13320]
book__name_price = [13320, '카밍 시그널']
book__name_price.push(false)
console.log(book__name_price)

let olimpic_newgame: any = [
    {
        'name': '쇼트트랙',
        'type': '혼성 계주'
    },
    true
]

console.log( olimpic_newgame );

console.log( olimpic_newgame[0].name) */

// enum 타입
/*enum Team {
    Manager,
    Planner,
    Developer,
    Designer
}

let sarha:number = Team.Manager;
console.log(sarha) 

enum Team {
    Manager = 101,
    Planner = 208,
    Developer, 
    Designer
}

let yamoo9: number = Team.Manager
let sarha: number = Team.Designer
let role:string = Team[208]

console.log(role) 



enum Sizes {
    xsmall = 75,
    small = 80,
    medium = 85,
    large = 90,
    xlarge = 95
}

console.log(Sizes)

console.log(Sizes.large);
console.log(Sizes[85])

*/

// function / union / void 타입 

/* function
const setInfo = (id:number, name:string) => {
    return { id, name }
}

let product_one = setInfo(120912, '스노우보드');

console.log(product_one)

const first = (o) => {
    return o[0]
}

const nth = (o, n) => {
    return o[n]
}

const last = (o) => {
    return o[o.length -1]
}

const numbers:any[] = [
    'one',
    'double',
    3,
    () => console.log('라스트 넘버')
]

console.log(first(numbers))
console.log(nth(numbers, 2))
console.log(last(numbers)())

*/

// 유니온 타입

/*
const setInfo = (id:number | string, name:string) => {
    return  { id, name}
}
console.log(setInfo(123,'강찬혁'))


const first = (o) => {
    return o[0];
}

const nth = (o, n) => {
    return o[n]
}

const last = (o) => {
    return o[o.length - 1]
}

const numbers:any[] = [
    'one',
    'double',
    3,
    () => console.log('라스트 넘버')
]

const messages:string = `사건의 핵심 '시그니처'를 파악하라`

console.log(first(messages))
console.log(nth(numbers,2))
console.log(last(numbers)())
*/

//함수 리턴 타입
/*
const assignClass = (name:string): void => {
    document.documentElement.classList.add(name)
}

const factorial = (n:number): number => {
    if (n < 0) { return 0 }
    if ( n === 1 ) { return 1 }
    return n * factorial ( n - 1 )
}

const repeat = (text: string, count: number = 2 ): string => {
    let result:string = ''
    while(count--) { result += text }
    return result
}

console.log(assignClass('강찬혁'))
console.log(factorial(2))
console.log(repeat('강찬혁', 5))
*/

/*
const setStyle = (el:HTMLElement, prop:string, value:string) => {
    el.style.setProperty(prop, value)
}

const getStyle = (el:HTMLElement, prop: any) => {
    return el.style[prop]
}

setStyle(document.body, 'background-color', '#9c1e04')

console.log(getStyle(document.body, 'background-color'))
*/

//함수식

/*
let factorial:(n:number) => number = function (n) {
    if (n < 0) { return 0 }
    if (n === 1) { return 1 }
    return n * factorial(n-1)
}

console.log(factorial(3) */

// Object 타입

/*
let Dom: {
    version: string,
    el: () => void,
    css: () => void,
    [propName: string]: any
  };
  
  Dom = {
    version: '0.0.1',
    el () {},
    css () {}
  };

  Dom.each = function(){}
  Dom.map = function(){}
  Dom.filter = function(){}
  */
 /*
 let y9: {
    version: string,
    each: () => void
    map: () => void
    extend: () => void
    [propName: string]: any
 }
  
 y9 = {
    version : '1.0.0',
    each() {},
    map() {},
    extend() {},
 }

 console.log(y9)

 y9.filter = () => {}
 y9.slice = () => {}
 */

 // null / undefined 타입
/*
  let nullable: null = null
  let undefinedable: undefined = undefined

 let assign_name: string | null = null
 if (!assign_name) {
    assign_name = '미네랄'
 }

 console.log(assign_name)
 */

 // never 타입
 
 /*
 const invalid = (message: string) : never => {
     throw new Error(message)
 }

 const fail = () => {
     return invalid('실패')
 }

 console.log(fail())
 */

 /*
 let never_type: never | number

 never_type = 99

 never_type = (function():never {throw new Error('ERROR')})()
 */

 /*
 const error = (message: string) : never => {
    throw new Error(message)
 }

 const $ = (selector: string) : HTMLElement | NodeList => { 
    if (typeof selector === 'string') {
        return document.querySelectorAll(selector)
    }
 }
 let body = $('body')
 let id = $(1988)

console.log(error('실패'));
*/

/*
let foo: never
let goo: any = 123


function foo2( x: string | number ): boolean {
    if (typeof x === "string") {
        return true
    }else if (typeof x === "number") {
        return false
    }
    return fail("Unexhaustive!")
}
function fail(message: string): never { throw new Error(message) }

let tmp: any = {id:"123"}
console.log(foo2(tmp))


function foo2 (x: string | number): boolean {
    if (typeof x === "string") {
        return true
    } else if (typeof x === "number") {
        return false
    }
    return fail("Unexhaustive")
}
function fail(message: string): void {throw new Error(message)}

let tmp: any = {id:"123"}
console.log(foo2(tmp))
*/


//사용자 정의 타입
/*
let Dom: {version:string, el:(selector:string)=>void, css:(prop:string)=>void} = {
    version: '0.0.1',
    el(){},
    css(){}
  };
  
  let y9: {version:string, el:(selector:string)=>void, css:(prop:string)=>void} = {
    version: '0.0.2',
    el(){},
    css(){}
  };

  console.log(Dom)
  console.log(y9)
*/

/*
type operation = {
    data: number[],
    output: (num:number) => number[]
}

let sum:operation = {
    data : [40,50,60],
    output(num) {
        return this.data.map (n => n*num)
    }
}

console.log(sum)
*/

/*

type operation = {
    title: string,
    price: string
    desc: string,
    category: string,
    platform: string
}

let heroGame_A:operation = {
    title: 'DC 언체인드',
    price: '인앱 구매 제공',
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일'
  }
  
  let heroGame_B:operation = {
    title: 'MARVEL 퓨처파이트',
    price: '',
    desc: '마블 유니버스 히어로와 함께하는 대규모 블록버스터 액션 RPG!',
    category: '롤플레잉',
    platform: '모바일'
  }
  */


  // 타입 어설션
  /*
  let assertion: any = "타입 어설션은 '타입을 단언' 합니다."

  let assertion_count:number = (<string>assertion).length

  console.log(assertion)
  console.log(assertion_count)
  

  let assertion: any = "타입 어설션은 '타입을 단언' 합니다."
  let assertion_count:number = (assertion as string).length

  console.log(assertion)
  console.log(assertion_count)

  */
/*
  let wave_event = new Event('wave', {
      bubbles: true,
      cancelable: false
  })

  document.addEventListener('wave', e => console.log(e))

  window.setTimeout(() => {
      document.dispatchEvent(wave_event)
  }, 1000)
  */

  // 블록 영역 변수, 상수 선언
  /*
  let context = document.querySelector('html')
  {
      let context = document.querySelector('body')
      console.log('블록문 내부 context = ', context)
  }
  console.log('글로벌 context = ', context)
  */

  // 템플릿 리터럴
  /*
  let nickname = 'yamoo9'

  let greeting_message = `
  <p>
  안녕하세요 <strong>${nickname}님</strong>
  환영^^
  </p>
  `
  document.body.innerHTML = greeting_message
*/

// 화살표 함수
/*
let corsURL = (url:string) : string => `https://crossorigin.me/${url}`

corsURL('http://yamoo9.herokuapp.com/rest/ediya-menu')
console.log(corsURL)
*/

// 전개 연산자 / 매개변수

// Default Parameters 함수 매개 변수의 기본 값
/*
function countDown(start:number = 10 ): () => number {
    return () => start > 0 ? start-- : 0
}
*/

//Spread Operator 전개 연산자
/*
let numbers:number[] = [101, 21, -12, 934, 87]

numbers = [10, 31, 11, ...numbers, -2, 0]

let min_number:number = Math.min(...numbers)
let max_number:number = Math.max(...numbers)

console.log(min_number)
console.log(max_number)
*/
// Rest Parameters 나머지 매개 변수
/*
function makeArray(...args:(number | string)[]): (number|string)[] {
    return args
}

makeArray(11,'eleven',100,'one hundred')
*/

// 비구조화 할당
// let [html, , body] = [document.documentElement, document.head, document.body]

// let numbers_module = {
//     multiplyNumbers: (...n:number[]):number => n.reduce((a, b) => a * b),
//     sumNumbers: (...n:number[]):number => n.reduce((a, b) => a + b)
// }

// let { sumNumbers } = numbers_module

//class의 정의

//접근 제어 속성 설정



/*
class Book {
    public title:string
    
    author:string
    
    private _manufacturing_plant:string
    protected paper_type:string
    constructor(title:string, author:string, public pages:number) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

let indRevo = new Book('한 권으로 정리하는 4차 산업혁명', '최진기', 367)
console.log(indRevo)
*/

/*
enum GenderType {
    Male,
    Female,
    GenderNeutral
}

interface Student {
    ID: number
    name:string
    age: number
    grade: number
    gender : 'male' | 'female' | 'genderBeutral'
}

const getStudentDetails = (studentID:number) :Student => {
    return {
        ID: studentID,
        name: '강찬혁',
        age: 24,
        grade: 3,
        gender: 'male',
    }
}

console.log(getStudentDetails(1))
*/
/*
const sendGreeting = (username:string, usergender?:string):void => 
{   
    if(usergender){
        return console.log(`당신의 이름은 ${username}이고 당신의 성별은 ${usergender}`)
    }else{
        return console.log(`당신의 이름은 ${username}입니다`)
    }
}
sendGreeting('강찬혁')
*/

//클래스
/*
class Human {

    constructor(
        private _fullName : string, 
        private age: number, 
        private jobTitle: string, 
        private hourlyRate: number,
        public workingHoursPerWeek: number){
    }

    get fullName () {
        return this._fullName
    }

    set fullName (value: string) {
        this._fullName = value
    }

    PrintStudentInfo = ():void => {
        console.log(`저의 이름은 ${this._fullName}이고 저의 나이는 ${this.age}살 이며 저의 직업은 ${this.jobTitle} 입니다 그리고 저의 근무 시간은 ${this.hourlyRate}시간이며 저의 수익은 ${this.workingHoursPerWeek}입니다
        `)
    }
}

let 유저1: Human = new Human('AA', 24, '주니어 프론트엔드개발자', 8, 200)
let 유저2: Human = new Human('BB', 44, '직장인', 8, 456)

console.log(유저1.fullName)

유저1.PrintStudentInfo()
유저2.PrintStudentInfo()
*/

/*
class Animal {
    private name : string
    constructor(theName: string) { this.name = theName}
}

class Rhino extends Animal {
    constructor() { super('Rhino') }
}

class Employee {
    private name: string
    constructor(theName: string) {this.name = theName}
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino

console.log(animal)
console.log(rhino)
console.log(employee)
*/

/*
class Person {
    protected name: string
    constructor(name: string) { this.name = name}
}

class Employee extends Person {
    private department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.name) //오류
console.log(howard.getElevatorPitch())
*/


/*
class Person {
    protected name: string
    protected constructor(theName: string) { this.name = theName}
}

class Employee extends Person {
    private department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let howard = new Employee('Howard', 'Sales')
let john = new Person('John') // person의 생성자는 protected 이다
console.log(howard.getElevatorPitch())
*/

// class 읽기 전용 지정자 (Readionly modifier)
/*
class Octopus {
    readonly name: string
    readonly numberOfLegs: number = 8
    constructor (theName: string) {
        this.name = theName
    }
}

let dad = new Octopus('Man with the 8 strong legs')
console.log(dad.name)
dad.name = 'Man with the 3-piece suit' // 오류! name 읽기 전용
*/

// 매개변수 프로퍼티 (Parameter properties)
/*
class Octopus {
    readonly numberOfLegs: number = 8
    constructor (readonly name: string) {} 
}

let dad = new Octopus('Man with the 8 strong legs')
console.log(dad.name)
*/

//접근자 (Accessors)  getter, setter
/*
const fullNameMaxLength = 10

class Employee {
    private _fullName: string = ''

    get fullName() : string {
        return this._fullName
    }

    set fullName(newName : string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error('fullName has a max length of ' + fullNameMaxLength)
        }
        this._fullName = newName
    }
}

let employee = new Employee()
employee.fullName = "Bob Smith"
if (employee.fullName) {
    console.log(employee.fullName)
}
*/

// 전역 프로퍼티 (static Properties)

/*
class Grid {
    static origin = {x: 0, y: 0}
    constructor (public scale: number) { }
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = (point.x - Grid.origin.x)
        let yDist = (point.y - Grid.origin.y)
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
    }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))
*/
//추상 클래스 (Abstract Classes)

/*
abstract class  Department {

    constructor(public name: string) {
        
    }

    printName(): void {
        console.log("Department name: " + this.name)
    }

    abstract printMeeting(): void
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing")
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am. ")
    }

    generateReports(): void {
        console.log("Generating accounting reports...")
    }
}

let department: Department
// department = new Department() // 추상클래스는 인스턴스화가 안됨
department = new AccountingDepartment() 
console.log(department.name)
console.log(department.printMeeting())
// console.log(department.generateReports()) // 선언된 추상 타입에 메서드가 존재하지 않는다
*/

/*
class Greeter {
    static standardGreeting = 'Hello, there'
    greeting: string = ''
    greet() {
        if (this.greeting) {
            return `Hello, ${this.greeting}`
        }
        else {
            return Greeter.standardGreeting
        }
    }
}

let greeter1: Greeter
greeter1 = new Greeter()
console.log(greeter1.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there!'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())

*/
/*

function builName(firstName = 'kang', lastName ='chanhyeok') {
    return `${firstName} ${lastName}`
}

let result1 = builName("지", "민")
let result2 = builName('hello', 'min')
let result3 = builName('아')
let result4 = builName()

console.log(result1, result2, result3, result4)

*/

//나머지 매개변수 (Rest Parameters)
/*
function builNames(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ')
}
let employeeName = builNames('Joseph', 'Samuel', 'Lucas', 'Mackinzie')

console.log(employeeName)

*/

// this 와 화살표 함수
/*
let desk = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13) 

            return {suit: this.suits[pickedSuit], card: pickedCard % 13} //arrow 함수가 아닐때는 desk를 객체를 불러와 주어야됨
        }
    }
}

let cardPicker = desk.createCardPicker()
let pickedCard = cardPicker () 

alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
*/

// this 매개변수 (this parameter)

/*
interface Card {
    suit: string
    card: number
}
interface Desk {
    suits: string[]
    cards: number[]
    createCardPicker(this: Desk): () => Card
}

let desk: Desk = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function(this: Desk) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)
            return {suit: this.suits[pickedSuit], card: pickedCard % 13}
        }
    }
}

let cardPicker = desk.createCardPicker()
let pickedCard = cardPicker()

console.log(cardPicker())

alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

*/

/*
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"}
    printLabel(myObj)

interface LabeledValue {
        label: string
}



function printLabels(labeledObj: LabeledValue){
    console.log(labeledObj.label)
}

    let myObjs = { size: 10, label: "Size 11 object"}
    printLabel(myObjs)

interface SquareConfig {
        color?: string
        width?: number
}
    




function createSquare(config: SquareConfig) : {color: string, area:number} {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
        return newSquare
}

    let mySquare = createSquare({color: "black"})
    console.log(mySquare)

*/
// 네임스페이스
interface StringValidator {
    isAcceptable(s: string): boolean
}

let lettersRegexp = /^[A-Za-z]+$/
let numberRegexp = /^[0-9]+$/

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s)
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s)
    }
}

let strings = ['Hello', '98052', '101']

let validators: { [s: string]: StringValidator } = {}
validators['ZIP code'] = new ZipCodeValidator()
validators['Letters only'] = new LettersOnlyValidator()

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s)

        console.log(`'${s}' ${ isMatch ? 'matches' : 'does not match' } '${ name }'. `)
    }
}