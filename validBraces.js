
//isValid function created that takes a string argument
function isValid(str) {
    // If the strings length is less than or equal to 1 then the function immediately returns false
    if (str.length <= 1)
      return false
  
    let matchingOpeningBracket, ch
    let stack = []
    // All types of opening & closing brackets
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']
  
    //forloop used to iterate over the index values of the string argument
    for (let i = 0; i < str.length; i++) {
      //each iteration will see that iteration of the strings index value saved to "ch"
      ch = str[i]
      //Find out if the value of ch (string index value) is in the closing brackets array.
      if (closingBrackets.indexOf(ch) > -1) {
      // Find the corresponding opening bracket to the closing bracket and save it to matchingbracket
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        // If the stack array length is 0 or the popped value of the last stack array index is not the same as matchingBracket then return false
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false
        }
      } else {
        //push values to stack array
        stack.push(ch)
      }
    }
    //once stack array is empty return true.
    return (stack.length == 0)
  };  


  isValid('(())')