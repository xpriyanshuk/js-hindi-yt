const accountId = 15526
let accountEmail="xpriyanshuk@gmail.com"
var accountPassword = "18188"
accountCity="jaipur"
let accountState;
//prefer not to use var beacuse of issue in block scope and functional scope


if (true) {
  var x = 10;
}
console.log(x); // 10 😬 (leaks outside)

if (true) {
  let y = 20;
}
console.log(y); // ❌ ReferenceError


//accountId = 19 not allowed beacause we are assinging in const variable
accountEmail="pk@gmail.com"
accountPassword="6789"
accountCity="delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
