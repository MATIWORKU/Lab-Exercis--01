var balanceAmount;
var amount;
var account = 0;
let tempBalance;
let tempAmount;


function deposit(b,a){
    return b + a;
}
function deposit(fn,sn)
{
    return fn + sn
}
function withdraw(b,a){
    if(b <= 1000){
        return "Your account does not have the required amount of money for the withdraw services. Please deposit more money.";
    }else{
        return b - a;
    }
    
}
function balance(){
    return balanceAmount
}
function transfer(b,a,acc){
    if(b <= 1000){
        return "Your account does not have the required amount of money for the transfer services. Please deposit more money.";
    }else{
        balanceAmount = b - a
        acc = acc + a
        return acc
    }
}
(function()
{   
    balanceAmount = prompt("Enter the amount of money you want initially in your account.");
    operation = prompt("Enter the number for the operation you need  1 for deposit 2 for withdraw 3 to know your balance 4 to transfer money to client");
    amount = prompt("Enter amount.")
    tempBalance = parseInt(balanceAmount);
    tempAmount = parseInt(amount);
    if(operation == 1){
        console.log("You deposited" + " " + amount + " to your account of a total balance " + deposit(tempBalance,tempAmount));
    }
    else if(operation == 2) {
        if (balanceAmount <= 1000) {
            console.log( withdraw(tempBalance, tempAmount));
        }else
        {
        console.log("You withdrawn" + " " + amount + " from your account of a total balance left " + withdraw(tempBalance, tempAmount));
        }
    }
    else if(operation == 4)
    {
        if (balanceAmount <= 1000) {
            console.log(transfer(tempBalance,tempAmount,parseInt(account)));
        }else
        {
            console.log("You transferred" + " " + amount + " to account of a total balance " +  transfer(tempBalance,tempAmount,parseInt(account)) + " and your account balance is " + balance());
        }
    }
    else{
        console.log("Your balance is" + " " + balance());
    }
}
)();