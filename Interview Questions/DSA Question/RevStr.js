
// Method 1
function reverse(str)
{
  console.log( str.split("").reverse().join("").split(" ").reverse().join(" ") );
  
}

reverse("Saurabh Verma");

// Using Reduce methods
function reverse3(str) {
  return str.split("").reduce((reversed, char) => console.log(char,reversed)
  );
}

console.log(reverse3("Using Reduce methods")); 


// methdod 3 Using Recursion
function reverse3(str){
    if(str=="")
        return str;

    return reverse3(str.substr(1))+str.charAt(0);
}

console.log(reverse3("Reverse using recursion"));


// using Map method
function reverse6(str) {
  return str.split("").map((char, i, arr) => arr[arr.length - 1 - i]).join("");
}

console.log(reverse6("Using Map method")); // "olleH"





