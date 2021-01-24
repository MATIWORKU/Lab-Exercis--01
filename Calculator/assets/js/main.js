var firstNumber;
var secondNumber;
var operation;
let tempSum = 0;
let tempMultiply = 1;
let Number = new Array();




function addition(Number)
{
    Number.forEach(function(member , index) {
       tempSum = tempSum + parseFloat (Number[index]) 
     });
    return tempSum
}
function subtraction(fn,sn)
{
    return fn - sn
}
function multiplication(Number)
{
    Number.forEach(function(member , index) {
        tempMultiply = tempMultiply * parseFloat (Number[index]) 
      });
     return tempMultiply
}
function division(fn,sn)
{
    if (sn > 0)
    {
        return fn / sn
    }
    else{
        return "Invalid Denominator"
    }
    
}

(function()
{
    operation = prompt("Enter the number for the operation you need  1 for addition 2 for subtraction 3 for multiplication 4 for division")
    if(operation == 1){
        noOfValues = prompt("how many Numbers do you wanna operate? ");
        for(let index = 0; index < parseInt(noOfValues); index++){
        Number[index] = prompt("No of elements" + (index + 1));
    }
    }
    else if(operation == 3) {
        noOfValues = prompt("how many Numbers do you wanna operate? ");
        for(let index = 0; index < parseInt(noOfValues); index++){
        Number[index] = prompt("No of elements" + (index + 1));
    }
    }
    else{
        firstNumber = prompt("Enter first number: ")
        secondNumber = prompt("Enter second number: ")
        tempFN = parseFloat(firstNumber)
        tempSN = parseFloat(secondNumber)
    }
    

    if(operation == 1){
        console.log("Your result" + " " + addition(Number));
    }    
    else if (operation == 2){
        console.log("Your result" + " " + subtraction(tempFN , tempSN));
    }    
    else if (operation == 3){
        console.log("Your result" + " " + " " + multiplication(Number));
    }
    else if(operation == 4)
    {
        console.log("Your result" + " " +division(tempFN , tempSN));
    }
    else
    {
        console.log("No operation selected.");
        
    }
}
)();