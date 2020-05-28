const x = {};
const y = { x: 55 };
const z = { y: 12 };
x[y] = 123;
x[z] = 771;
console.log(x[y]);
console.log(x);
console.log(z.toString());
console.log(true + false);
console.log(2 + true);

let num = 5;
setTimeout(() => {
  num += 6;
  console.log(num);
}, 100);

num = 6;

console.log("global", num);
