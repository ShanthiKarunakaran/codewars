/*codewars kata - Beginner Series #3 Sum of Numbers*/
function getSum( a,b, step = a < b ? 1 : -1 )
{
  let arr =[]
  if(a === b) {
    return a
  }
  if(step > 0) {
    for(let i=a; i<=b; i+=step) {
      arr.push(i)
    }
  } else {
    for(let i=a; i<=b; i-=step) {
      arr.push(i)
    }
  }
  /*let sum = 0;
  for(var i=0; i<arr.length; i++) {
    sum+= arr[i]
  }*/
  

  const sum = arr.reduce((prevValue,currentValue) => prevValue+currentValue, 0)
  return sum
}

console.log(getSum(1,3))