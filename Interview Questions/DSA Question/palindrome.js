function palindrom(str){
  let new_str=str.split("").reverse().join("");
  if(str===new_str){
    console.log("it is a palindrome");
  }
    else{
        console.log("it is not a palindrome");
    }  
}

// palindrom("racecar");
let st="Saurabh Vemra";
let new_st =[...st];
// console.log(new_st);

// method 2 using Recursion
function checkPalindrome(str) {
    if(str.length<=1){
        return true;
    }
    if(str[0]!==str[str.length-1]){
        return false;
    }
    console.log(str.slice(1,-1));
    
    return checkPalindrome(str.slice(1,-1));    
}
console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("hello"));
