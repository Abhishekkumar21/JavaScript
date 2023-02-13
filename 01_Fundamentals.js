//Function --> Function is a block of code / statements that performs some computations/operations on that block of codes w.r.t to some inputs
  // to produde output.
/*Purpose of a function : Code reusability, Code Maintainability, Code Modularity*/
/* There is two ways of creating functions in the JavaScript -- Function Declrations and Function Expression.*/ 


/*Function declaration ==> The "function" keyword goes first, then goes the name of the function, 
then a list of parameters between the parentheses (comma-separated, empty in the example below, we’ll see examples later) 
and finally the code of the function, also named “the function body”, between curly braces.
*/
function message (){
    console.log("Hello! This is message() function body statement.");
 }
message();  // function calling 


 /*Function Expression ==> It allows us to create function in middle of expression.
   In this , there is no function name after "function" keyword rather than there a variable assigned with the function definition.
   this variable is considered as function name.
   -- we do same in case of fuction declaration but in different way.
   Actually , FUCTION IS A VALUE.
*/

let message1 = function (){
    console.log("Hello! This is message1() function body statement.");
}
message1(); // function calling.

