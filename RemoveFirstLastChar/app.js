/*codewars kata - Remove First and Last character of a given string*/
function removeChar(str){
    let strLen = str.length
    if(strLen === 2) {
      return
    } else {
      return str.slice(1,-1)
    }
 
 }


 console.log(removeChar("hello"))
