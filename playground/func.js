function func1() {
  console.log(arguments);
  for (const val of arguments) {
    console.log(val);
  }
  console.log(this);
}
const a = func1.bind({ salary: 50000 }, 11);
// a(12);

// func1(12, 34, "cnjdj");
// func1.apply({ name: "fattylee" }, [12, 34, "cnjdj"]);
// func1.call({ name: "fattylee" }, ...[12, 34, "cnjdj"]);
// func1.bind({ age: 33 }, 23)(12, 15);
// func1.bind({ age: 33 })(12, 15);
// for (const i in { name: "abu", age: 33 }) {
// console.log(i);
// }

function outer(a) {
  a += 5;
  return (b) => b + arguments[0];
}
// console.log(outer(1)(2));
func1.prototype.hi = 89;
console.log(new func1(23, 11).hi);
