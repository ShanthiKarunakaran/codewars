/*codewars kata*/
function calculate(...args1) {
  console.log("rest args1", args1)
  return function(...args2){
    console.log("rest args2", args2)
    return [...args1, ...args2].reduce((sum,n) => sum +n)
  }
}



var result = calculate(2,4)(3,7,1)
console.log("result", result)