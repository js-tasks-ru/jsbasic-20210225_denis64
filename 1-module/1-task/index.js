//#1
// function factorial(n) {
//   let result = 1;
//   while (n) {
//     result *= n--;
//   }
//   return result;
// }

//#2
function factorial(n){
  let result = 1;
  for(let i = 1; i<=n; i++) {
    result *= i;
  }
  return result;
}
