/*codewars kata -Create Phone Number*/
function createPhoneNumber(str){

  //Solution1 : using regexp
  let str = str.join('');
  let match = str.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };

  /*let test = str.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)

    if(test) {
      return `(${str.substring(0,3)}) ${str.substring(3,6)} -${str.substring(6)}`
    }*/
  return null

    //Solution 2: using slice and join method with template literals

    //return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).//join('')} -${arr.slice(6).join('')}`

    //Solution 3: using join and then substring
    /*return `(${str.substring(0,3)}) ${str.substring(3,6)} -${str.substring(6)}`*/

    /*Solution 4: using replace method*/
    /*var mask = 'xxx xxx -xxxx'

    for(var i=0; i<arr.length; i++) {
      mask= mask.replace('x',arr[i])
    }
    return mask*/

}


 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
