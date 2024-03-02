// TypeError: Assignment to Constant Variable in JavaScript

// EXAMPLE 1 - Declare the variable using `let` instead of `const`

// 👇️ using `let`
let a = 'bobby';

a = 'hadz';

console.log(a); // 👉️ "hadz"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Pick a different name for the variable

// const a = 'bobby';

// const b = a + ' hadz';

// console.log(b); // 👉️ "bobby hadz"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Declaring a `const` variable with the same name in a different scope

// const a = 'bobbyhadz.com';

// if (true) {
//   const a = 100;
//   console.log(a); // 👉️ 100
// }

// function example() {
//   const a = [1, 2, 3];
//   console.log(a); // 👉️ [1, 2, 3]
// }

// example();

// console.log(a); // 👉️ hello

// ------------------------------------------------------------------

// // EXAMPLE 4 - The `const` keyword doesn't make objects immutable

// const obj = {
//   name: 'Bobby',
// };

// // ✅ Works
// obj.name = 'Alice';
// console.log(obj); // 👉️ {name: 'Alice'}
