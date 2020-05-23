const number = 1346524478;
let num = number.toLocaleString(
  ("en-US", { style: "currency", currency: "usd" })
);
console.log(num);

num = number.toLocaleString("fr");
console.log(num);

num = number.toLocaleString("ar");
console.log(num);

num = number.toLocaleString("ar");
console.log(num);

num = number.toLocaleString("zh");
console.log(num);

let test = 40.9897237;
// test = test | 0;
test = Math.ceil(test);
console.log(test);

// console.log(
// [...new Array(30)].map((item) => {
// // console.log(5);
// })
// );

const arr = [...new Array(4)];
arr.push(67);
// console.log(arr.length);
// arr.forEach((item) => console.log(item));

let value = encodeURIComponent(
  (Math.floor(Math.random() * 123456) + 123456).toString()
);
console.log(value);
