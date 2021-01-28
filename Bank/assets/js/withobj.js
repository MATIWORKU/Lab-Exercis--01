class person {
    constructor(name,account,balance){
        this.name = name;
        this.account = account;
        this.balance = parseFloat(balance)
    }

}

var person_1 = new person("Leonard", 100202 , 2000)
var person_2 = new person("katy" , 100211 , 500)

function deposit(amount){
    person_1.balance += parseFloat(amount);
    window.alert (person_1.balance);
}
function withdraw(amount){
    if(person_1.balance - amount > 100 && amount < person_1.balance){
        person_1.balance -= amount;
        window.alert (person_1.balance); 
    }
    else{
        window.alert ("your account have the sufficient balance to do the withdrawal. please enter a reasonable number!!!")
    }
}

function balance(){
    window.alert ("your account " + person_1.account + " has a balance of " + person_1.balance);
}

function transfer(amount){
    if (person_1.balance - amount > 100) {
        person_1.balance -= amount;
        person_2.balance += amount
    }
    else{
        window.alert("Not sufficient balance")
    }
}

function init(){
    while (true){
        var operation = prompt ("Please choose the service you want to use.\n 1) deposit \n 2) withdraw \n 3) balance \n 4) Transfer \n 5) to exit");
        if (operation == 5) {
            window.alert("Thanks for using our bank. See you next time.");
            break;
        }
        else if (operation == 1) {
            var amount = prompt("Enter the money you want to deposit:")
            if(isNaN(amount)){
                window.alert ("Invalid input");
            }
            else deposit(amount);
        } 
        else if (operation == 2) {
            var amount = prompt("Enter the money you want to withdraw:")
            if(isNaN(amount)){
                window.alert("Invalid input");
            }
            else withdraw(amount);
        } 
        else if (operation == 4) {
            var amount = prompt("Enter the money you want to transfer:")
            if(isNaN(amount)){
                window.alert("Invalid input");
            }
            else transfer(amount);
        } 
        else if (operation == 3) {
            balance();
        }
        else{
            console.log("Invalid input");
        } 
    }
} init();