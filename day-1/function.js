// function add(){
//     let sum=2+3;
//     console.log(sum);
// }
// add();

// const add = (x, y) => {
//   let sum = x + y;
//   return sum;
// };

// console.log(add(4, 7));
// add(4, 3);

// const oddEven = (num) => {
//   let remainder = num % 2;
//   let result;
//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// };
// const result = oddEven(10);
// console.log(result);

// const checkOddEven=(num)=>(num%2===0?"Even":"Odd");
// const result=checkOddEven(10);
// console.log(result);

//?WAF which accepts n a argument and prints whether num is divisible by 5

const checkdivisibleornot = (num) => (num % 5 === 0 ? "divisible" : "not");
const result = checkdivisibleornot(10);
console.log(result);
