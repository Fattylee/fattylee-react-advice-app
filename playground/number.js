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
