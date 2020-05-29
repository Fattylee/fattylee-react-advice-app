function cal(a, b, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    default:
      result = "Math error";
  }
  return result;
}

let res = cal(5, 2, "+");
res = cal(5, 2, "-");
// console.log(res);

function factory(result = 0) {
  return {
    add(x) {
      result += x;
      return this;
    },
    minus(x) {
      result -= x;
      return this;
    },
    get res() {
      return result;
    },
  };
}

res = factory()
  .add(3)
  .add(2)
  .add(1)
  .minus(5)
  .add(10).res;
// console.log(res);

function foo() {
  return bar;
  // var bar = 5;
  function bar() {}
  bar = 7;
  var bar = {};
}

// console.log(typeof foo());
console.log("".split("; ")[1]);
