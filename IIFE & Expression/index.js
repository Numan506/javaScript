

// var num1 = parseInt(prompt("Enter the Num1: "))
// var num2 = parseInt(prompt("Enter the Num2: "))

//  IIFE System Here:

(function display(fInput,lInput){
   document.write(fInput + lInput);
})(Number1 = parseInt(prompt("Enter the Num1: ")), Number2 = parseInt(prompt("Enter the Num1: ")));


//  Function Expression  System Here:


var result = function display(txt){
  document.write(txt)
}

result("Hello Function Expression ")