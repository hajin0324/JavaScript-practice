//변수 선언
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2)
console.log(lattePrice * 4 + mochaPrice * 2)
console.log(lattePrice + mochaPrice)
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2)
console.log(lattePrice * 3)

//함수 선언
function greetings(sentence) { 
  console.log('Hi');
  console.log('안녕');
  console.log(sentence);
};

// 함수 호출
greetings('Hola');

function welcome(name) {
  console.log('안녕하세요. ' + name + '님!');
};

welcome('hajin');

function printSquare(x) {
  console.log(x * x);
};

printSquare(2);

function printSum(num1, num2) {
  console.log(num1 + num2);
};

printSum(10, 5);

function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은 ' + name + ' 입니다.');
  console.log('생년월일은 ' + birth + ' 이고,');
  console.log('국적은 ' + nationality + ' 입니다.');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다!');
};

introduce('hajin', '01.03.24', '한국', '학생');

// return값
function getTwice(number) {
  return number * 2;
};

console.log(getTwice(5));